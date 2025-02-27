const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const paymentRoutes = require("./routes/paymentRoutes");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/wallet-info", async (req, res) => {
    try {
      const balance = await connection.getBalance(wallet.publicKey);
      res.json({
        address: wallet.publicKey.toString(),
        balance: balance / LAMPORTS_PER_SOL, // Convert lamports to SOL
      });
    } catch (error) {
      console.error("Error fetching wallet info:", error);
      res.status(500).json({ error: "Failed to fetch wallet info" });
    }
  });
  