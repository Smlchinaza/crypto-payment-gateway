import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/payment-form" className="hover:text-yellow-400">Payment Form</Link></li>
        <li><Link to="/payment-history" className="hover:text-yellow-400">Payment History</Link></li>
      </ul>
    </nav>
  );
}