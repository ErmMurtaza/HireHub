const Booking = require("../models/bookingModel");

exports.addBooking = async (req, res) => {
  try {
    const id = await Booking.createBooking(req.body);
    res.status(201).json({ message: "Booking successful", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.getBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
