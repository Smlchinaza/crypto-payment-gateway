import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import PaymentForm from "./pages/PaymentForm";
import PaymentHistory from "./pages/PaymentHistory";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
      </Routes>
    </Router>
  );
}
