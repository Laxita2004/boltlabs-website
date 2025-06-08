import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import teamRouter from './routes/teamRoutes.js';  

// Config
dotenv.config();

// Initialize Express
const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.json());

// Routes
app.use('/api/team', teamRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});