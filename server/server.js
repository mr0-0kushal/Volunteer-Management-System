import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/user.routes.js';
import adminRouter from './routes/admin.routes.js';  // Import your auth routes

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS (if needed)
app.use(cors());

// Connect to MongoDB
connectDB();

// Alll routes here --> 
app.use('/api/user' , userRouter);
app.use('/api/admin' , adminRouter);

// Default route for testing server
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Error handling middleware (optional, but useful for catching errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
