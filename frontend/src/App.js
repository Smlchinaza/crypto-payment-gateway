import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PaymentForm from "./pages/PaymentForm";
import PaymentHistory from "./pages/PaymentHistory";
import WalletInfo from "./pages/WalletInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl">Welcome to Crypto Payment Gateway</h1>} />
          <Route path="/payment-form" element={<PaymentForm />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="/wallet-info" element={<WalletInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
