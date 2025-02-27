// listener.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory storage for payments
let payments = [];

/**
 * Mock function to simulate receiving a payment and converting it to USDC
 * @param {string} token - The token received (e.g., SOL, USDT)
 * @param {number} amount - Amount of the token received
 */
function handleIncomingPayment(token, amount) {
  const conversionRate = token === "SOL" ? 75 : token === "USDT" ? 1 : 0; // Mock rates
  const usdcAmount = amount * conversionRate;

  const payment = {
    token,
    amount,
    usdcAmount,
    timestamp: new Date().toLocaleString(),
  };

  payments.push(payment);
  console.log("Payment processed:", payment);
}

// Mock: Simulate incoming payments every 10 seconds
setInterval(() => {
  const mockTokens = ["SOL", "USDT", "ETH"];
  const token = mockTokens[Math.floor(Math.random() * mockTokens.length)];
  const amount = parseFloat((Math.random() * 5 + 1).toFixed(2)); // Random amount between 1-6
  handleIncomingPayment(token, amount);
}, 10000); // Every 10 seconds

// Endpoint to get payment history
app.get("/payments", (req, res) => {
  res.json(payments);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
