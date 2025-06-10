const { Pool } = require('pg');

const connectDB = async () => {
  const pool = new Pool({
    connectionString: process.env.SUPABASE_DB_URL, // Set this in your .env
    ssl: {
      rejectUnauthorized: false, // Supabase requires SSL in production
    },
  });

  try {
    const client = await pool.connect();
    console.log('Supabase Postgres Connected...');
    client.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
