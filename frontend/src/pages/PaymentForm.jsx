import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("SOL");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const { data } = await axios.post("http://localhost:5000/pay", { amount, token });
      setMessage(`✅ Payment successful! Txn Hash: ${data.transactionHash}`);
      setAmount("");
      setToken("SOL");
    } catch (error) {
      console.error("Payment error:", error);
      setMessage("❌ Payment failed. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Make a Payment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            min="0.01"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Token</label>
          <select
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="SOL">SOL</option>
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="BONK">BONK</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      </form>
      {message && <p className="mt-4 text-center font-medium">{message}</p>}
    </div>
  );
};

export default PaymentForm;
