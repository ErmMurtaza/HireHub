import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddWorker from "./pages/AddWorker";
import WorkerList from "./pages/WorkerList";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";
const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-worker" element={<AddWorker />} />
        <Route path="/workers" element={<WorkerList />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking-history" element={<BookingHistory />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
