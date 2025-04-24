import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config({path:'./.env'});

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

console.log('🔏 API_KEY:', API_KEY);
console.log('🔏 API_URL:', API_URL);

// Middleware setup
app.use(cors());
app.use(express.json());
// This tells Express to serve any static files (like index.html, style.css, or any .js you reference) from the same folder as server.js.
app.use(express.static('.'));

// API route handling
const router = express.Router();
const symbol = "TSLA"; // Tesla Stock

router.get('/function', (req, res) => {
    const { function: fn, symbol } = req.query;
  
    if (!fn || !symbol) {
      return res.status(400).json({ error: "Missing 'function' or 'symbol' query parameter." });
    }
  
    // Base URL
    let baseURL = `https://www.alphavantage.co/query?function=${fn}&symbol=${symbol}&apikey=${API_KEY}`;
  
    // Add interval and outputsize if it's intraday
    if (fn === "TIME_SERIES_INTRADAY") {
      baseURL += "&interval=5min&outputsize=full";
    }
  
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        if (data.Note || data["Error Message"]) {
          console.error("⛔ Alpha Vantage API Error:", data);
          return res.status(500).json({ error: "Alpha Vantage API error", details: data });
        }
  
        res.json(data);
      })
      .catch(error => {
        console.error("🚨 Error fetching stock data:", error);
        res.status(500).json({ error: "Failed to fetch stock data" });
      });
  });
  

// Mount the router to handle '/api' requests
app.use('/api', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

