const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StaySense AI Backend is running 🚀",
  });
});

// API Routes
app.use("/api/bookings", bookingRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Error Handler
app.use(errorHandler);

module.exports = app;