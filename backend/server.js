import express from 'express';
import { createClient } from '@supabase/supabase-js'; // ✅ you missed this import
import loader from './loader/index.js';

// ✅ Initialize Supabase client
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();

