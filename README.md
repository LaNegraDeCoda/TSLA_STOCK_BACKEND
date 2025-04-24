# TSLA_STOCK_BACKEND
TSLA API NODE SERVER

# 🔐 TESLA Stock Viewer (Secure + Multi-Timeframe + Chart)

A modern, secure, and expandable web app that fetches **real-time and historical stock data for Tesla (TSLA)** via the [Alpha Vantage API](https://www.alphavantage.co/documentation/). This version leverages a **Node.js backend** and hides the API key using a `.env` file — the **recommended setup for production**.

---

## ✅ Key Features

- 🔒 API key is **secure** using `.env` (never exposed in the frontend)
- ⏱️ Supports **Daily, Weekly, Monthly**, and **Intraday (5min)** views
- 📊 Visual chart rendering using **Chart.js**
- 🔁 Auto-refresh every N minutes (customizable)
- 🧼 Clean and simple UI

---

## 🔧 Tech Stack

- **Frontend:** HTML5 + Vanilla JS + Chart.js
- **Backend:** Node.js + Express
- **API Provider:** Alpha Vantage
- **Security:** `.env` file with dotenv

---

## 📁 Project Structure

TESLA_STOCK_BACKEND/ ├── public/ │ └── index.html # Frontend UI ├── .env # Contains your Alpha Vantage API key (NOT committed) ├── teslaServer.js # Express server renamed from server.js ├── package.json # Node config └── README.md # You're reading it

---

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/LaNegraDeCoda/TESLA_STOCK_BACKEND.git
cd TESLA_STOCK_BACKEND

2. Install dependencies
npm install

3. Create a .env file
ALPHA_VANTAGE_API_KEY=your_real_api_key_here
🔐 Keep this file secret — it is ignored by .gitignore to prevent leaks.

4. Run the server
node teslaServer.js

The app will be available at:
http://localhost:5000

🌐 How It Works
🔁 Frontend
Sends a request to /api/function with selected timeframe and symbol

Never sees the real API key

Displays parsed stock data and renders it in a Chart.js line chart

🧠 Backend
Reads your API key from .env

Builds request to Alpha Vantage securely

Returns data to the frontend

🔒 Why This Is Secure
Your API key is:

Never sent to the browser

Hidden in a .env file (server-side only)

Used only by your backend to make API requests

📬 API Used
Base URL: https://www.alphavantage.co/query

Functions:

TIME_SERIES_DAILY

TIME_SERIES_WEEKLY

TIME_SERIES_MONTHLY

TIME_SERIES_INTRADAY (interval=5min)

🧪 Usage
From the browser:

Select your preferred timeframe (daily, weekly, etc.)

Click "Fetch Data"

View parsed data + interactive chart

Data auto-refreshes every 5 minutes

👩🏾‍💻 Author
Made with love by
LaNegraDeCoda | MIND YOUR TECH IN BUSINESS
GitHub

Building secure, inclusive tech — one line of code at a time.

📜 License
MIT — Free to learn, remix, and innovate.
