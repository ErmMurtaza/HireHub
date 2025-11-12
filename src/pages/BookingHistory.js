import React, { useContext } from "react";
import { WorkerContext } from "../context/WorkerContext";
import Navbar from "../components/Navbar";

const BookingHistory = () => {
  const { bookings, workers } = useContext(WorkerContext);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Booking History</h2>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          bookings.map((b) => {
            const worker = workers.find((w) => w.id === b.workerId);
            return (
              <div key={b.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                <h3>{worker?.name}</h3>
                <p>Profession: {worker?.profession}</p>
                <p>Hours Booked: {b.hours}</p>
                <p>Total Paid: ₹{b.total}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default BookingHistory;
