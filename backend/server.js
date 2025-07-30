/////server.js
import express from "express";
import loader from "./loader/index.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express app
const app = express();

//for proper path resolution
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.send("BoltLabs backend is running 🚀");
  });


// ✅ CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
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

  
  if(process.env.NODE_ENV === "production") {
    // Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }
  // Start the server
  const PORT = process.env.PORT; 
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();
