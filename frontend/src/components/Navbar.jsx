import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Crypto Payment Gateway</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/payment-form" className="text-white hover:underline">
              Payment Form
            </Link>
          </li>
          <li>
            <Link to="/payment-history" className="text-white hover:underline">
              Payment History
            </Link>
          </li>
          <li>
            <Link to="/wallet-info" className="text-white hover:underline">
              Wallet Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
