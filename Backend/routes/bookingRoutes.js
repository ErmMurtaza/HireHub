const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookingController");

router.post("/", controller.addBooking);
router.get("/", controller.getBookings);

module.exports = router;
