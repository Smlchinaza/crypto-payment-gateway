// src/components/PaymentHistory.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/payments");
        setPayments(data);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments yet.</p>
      ) : (
        <ul className="space-y-4">
          {payments.map((payment, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg bg-gray-100 flex justify-between"
            >
              <div>
                <p><strong>Token:</strong> {payment.token}</p>
                <p><strong>Amount Received:</strong> {payment.amount}</p>
              </div>
              <div>
                <p><strong>Converted to USDC:</strong> {payment.usdcAmount}</p>
                <p className="text-sm text-gray-500">{payment.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
