import express from 'express';
import loader from './loader/index.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// ✅ Initialize Express app
const app = express();

const startServer = async () => {
  await loader(app); // Initialize routes, middlewares etc.

  // ✅ Global error handler
  app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).json({ error: 'Something went wrong on the server!' });
  });


  // ✅ Start the server
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();

