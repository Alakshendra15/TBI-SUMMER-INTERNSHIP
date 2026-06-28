const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  updateBookingStatus,
  deleteBooking,
  searchBookings,
} = require("../controllers/bookingController");

// Search Bookings
router.get("/search", searchBookings);

// Get All Bookings
router.get("/", getAllBookings);

// Get Single Booking
router.get("/:id", getBookingById);

// Create Booking
router.post("/", createBooking);

// Update Entire Booking
router.put("/:id", updateBooking);

// Update Booking Status
router.patch("/:id/status", updateBookingStatus);

// Delete Booking
router.delete("/:id", deleteBooking);

module.exports = router;