/////server.js
import express from "express";
import loader from "./loader/index.js";
import dotenv from "dotenv";
import cors from "cors";


// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express app
const app = express();


app.get("/", (req, res) => {
    res.send("BoltLabs backend is running 🚀");
  });

// ✅ CORS configuration
// following this lines if you have specific origins to allow in production
// ✅ Define allowed origins clearly as of now
// const prodOrigins = [
//   'https://bolt-labs.vercel.app', 
// ];



// In main server file, set up CORS
// // ✅ CORS configuration
const prodOrigins = [
  process.env.ORIGIN_1,
  process.env.ORIGIN_2,
  process.env.ORIGIN_3,
].filter(Boolean); // remove undefined entries

const devOrigin = ['http://localhost:5173'];

const allowedOrigins = process.env.NODE_ENV === 'production' ? prodOrigins : devOrigin;

app.use(
  cors({
    origin: (origin, callback) => {
      if (process.env.NODE_ENV === 'production') {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`${origin} not allowed by CORS`));
        }
      } else {
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
  }),
);


// Body parser (json)
app.use(express.json());

const startServer = async () => {
  await loader(app); // Initialize routes, middlewares etc.

  // Global error handler
  app.use((err, req, res, next) => {
    console.error("Server Error:", err.stack);
    res.status(500).json({ error: "Something went wrong on the server!" });
  });

  
 
  // Start the server
  const PORT = process.env.PORT || 5001; 
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();