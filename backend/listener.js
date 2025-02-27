const { Connection, PublicKey } = require("@solana/web3.js");
const { Jupiter, ROUTE_PROGRAM_ID } = require("@jup-ag/core");
const dotenv = require("dotenv");
dotenv.config();

const RPC_URL = process.env.SOLANA_RPC_URL;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const connection = new Connection(RPC_URL, "confirmed");
const walletPublicKey = new PublicKey(WALLET_ADDRESS);

async function checkIncomingTransactions() {
  console.log("Listening for incoming transactions...");
  connection.onLogs(walletPublicKey, async (log) => {
    if (log.err) return;
    console.log("Transaction detected! Checking for incoming tokens...");

    const transaction = await connection.getParsedConfirmedTransaction(
      log.signature,
      "confirmed"
    );

    if (!transaction || !transaction.meta) return;

    transaction.meta.postTokenBalances.forEach(async (balance) => {
      if (balance.owner === WALLET_ADDRESS) {
        const tokenMint = balance.mint;
        const amount = balance.uiTokenAmount.uiAmount;
        console.log(`Received ${amount} of token: ${tokenMint}`);

        if (tokenMint !== process.env.USDC_MINT) {
          console.log(`Swapping ${amount} of ${tokenMint} to USDC...`);
          await swapToUSDC(tokenMint, amount);
        }
      }
    });
  });
}

async function swapToUSDC(inputMint, amount) {
  try {
    const jupiter = await Jupiter.load({
      connection,
      userPublicKey: walletPublicKey,
    });
    
    const routeMap = await jupiter.getRouteMap();
    const outputMint = process.env.USDC_MINT;

    if (!routeMap[inputMint]?.includes(outputMint)) {
      console.log("No swap route available for this token.");
      return;
    }

    const { routes } = await jupiter.computeRoutes({
      inputMint,
      outputMint,
      amount,
      slippageBps: 50,
    });

    if (routes.length === 0) {
      console.log("No valid swap route found.");
      return;
    }

    const { execute } = await jupiter.exchange({ route: routes[0] });
    const txSignature = await execute();

    console.log(`Swap successful! Transaction: ${txSignature}`);
  } catch (error) {
    console.error("Swap failed:", error);
  }
}

checkIncomingTransactions();
