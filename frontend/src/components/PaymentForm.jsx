import { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [tokenMint, setTokenMint] = useState('');
  const [amount, setAmount] = useState('');
  const [quote, setQuote] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/api/payment/pay', { tokenMint, amount });
    setQuote(data.quote);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Crypto Payment Gateway</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Token Mint"
          className="w-full p-2 border rounded"
          value={tokenMint}
          onChange={(e) => setTokenMint(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Get Quote</button>
      </form>
      {quote && (
        <div className="mt-4 bg-green-100 p-2 rounded">
          <p><strong>USDC Amount:</strong> {quote.outAmount / 10 ** 6}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
