import express from 'express';
import cors from 'cors';
import loader from './loader/index.js';
import dotenv from 'dotenv';
import cors from 'cors';

// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express app
const app = express();

<<<<<<< HEAD
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true ,// If using cookies/auth headers
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

=======
// ✅ CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true
}));

// ✅ Body parser (json)
app.use(express.json());

>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5
const startServer = async () => {
  await loader(app); // Initialize routes, middlewares etc.

  // ✅ Global error handler
  app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({ error: 'Something went wrong on the server!' });
  });

  // ✅ Start the server
<<<<<<< HEAD
  const PORT = process.env.PORT || 5000;
=======
  const PORT = process.env.PORT || 8080; // default to 5000
>>>>>>> b0cd3b99a5687a8e006efa9225a83517263d02b5
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();
