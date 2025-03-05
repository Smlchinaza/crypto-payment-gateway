# Crypto Payment Gateway

## 🚀 Overview
This project is a **crypto payment gateway** that allows merchants to accept payments in multiple cryptocurrencies. The gateway automatically detects incoming payments, swaps them to **USDC**, and provides a payment history dashboard for users.

## ✨ Features
- 🔄 **Automatic Token Swap**: Converts all received tokens (SOL, USDT, ETH, and more) into **USDC** using **Jupiter Exchange**.
- 📜 **On-Chain Payment Detection**: Monitors wallet transactions in real-time.
- 📊 **Payment History**: Displays all on-chain payments in a user-friendly UI.
- 🔐 **Secure & Transparent**: Uses smart contracts for transaction handling.
- 📡 **Wallet Information**: View wallet balance and address on the frontend.
- 🛠 **Built with Modern Tech**: Uses **Node.js, Express, React, Solana Web3.js, and Tailwind CSS**.

## 🏗 Tech Stack
- **Backend**: Node.js, Express.js, Solana Web3.js, Jupiter Aggregator
- **Frontend**: React.js, Tailwind CSS, Axios
- **Blockchain**: Solana, Ethereum, Avalanche

## 📂 Project Structure
```
crypto-payment-gateway/
│── backend/
│   ├── server.js          # Main backend server
│   ├── listener.js        # Listens for on-chain payments
│   ├── routes/
│   │   ├── paymentRoutes.js  # API routes for payments
│   ├── services/
│   │   ├── swapService.js  # Handles token swaps
│   └── .env                # Environment variables
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── PaymentForm.jsx     # Payment submission form
│   │   │   ├── PaymentHistory.jsx  # Displays payment history
│   │   │   ├── WalletInfo.jsx      # Shows wallet balance & address
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── PaymentForm.jsx
│   │   │   ├── PaymentHistory.jsx
│   │   │   ├── WalletInfo.jsx
│   │   ├── App.js
│   ├── package.json
│   ├── .env
│
│── README.md
```

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/crypto-payment-gateway.git
cd crypto-payment-gateway
```

### **2️⃣ Install Dependencies**
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

### **3️⃣ Configure Environment Variables**
Create a **.env** file in both backend and frontend folders:

#### **Backend (`backend/.env`)**
```
RPC_URL=https://api.mainnet-beta.solana.com
WALLET_PRIVATE_KEY=your_private_key_here
JUPITER_API=https://quote-api.jup.ag/v4/quote
```

#### **Frontend (`frontend/.env`)**
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### **4️⃣ Run the Application**
#### Start Backend
```sh
cd backend
npm start
```
#### Start Frontend
```sh
cd frontend
npm start
```

## 📌 Usage
1. **Go to `http://localhost:3000/`** in your browser.
2. Navigate between **Home, Payment Form, Payment History, and Wallet Info**.
3. Any payment sent to the configured wallet will be **automatically swapped** to USDC.
4. Payment history will update **in real-time**.

## 🚀 Future Improvements
- ✅ Multi-chain support (Ethereum, BSC, Polygon)
- ✅ Subscription-based payments
- ✅ Merchant dashboard for analytics

## 🤝 Contributing
Contributions are welcome! Feel free to fork, create a branch, and submit a PR.

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Built with ❤️ by [Chukwuemeka, Samuel Chinaza]**
