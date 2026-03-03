require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

// database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection failed', err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CORS - configure globally for all routes
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}));

// routes
app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));