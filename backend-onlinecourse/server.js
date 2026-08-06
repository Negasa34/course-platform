const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Environment variables load gochuuf
dotenv.config();

// Database waliin wal-qunnamuu
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Test Route
app.get('/', (req, res) => {
  res.send('API is running successfully!');
});

// Port & Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in dev mode on port ${PORT}`);
});