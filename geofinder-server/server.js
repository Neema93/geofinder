
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection
const pool = new Pool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || "geofinder",
  user: process.env.DB_USER || "heeya",
  password: process.env.DB_PASSWORD || undefined,
});

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "GeoFinder backend is running!",
  });
});

// Database health-check route
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT current_database() AS database, NOW() AS server_time"
    );

    res.json({
      message: "PostgreSQL connected successfully!",
      database: result.rows[0].database,
      serverTime: result.rows[0].server_time,
    });
  } catch (error) {
    console.error("Database test error:", error.message);
    res.status(500).json({
      message: "PostgreSQL connection failed",
    });
  }
});

// Database connection and server startup
async function startServer() {
  try {
    await pool.query("SELECT 1");
    console.log("PostgreSQL connected successfully");

    app.listen(PORT, () => {
      console.log(
        `GeoFinder server running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
}

startServer();