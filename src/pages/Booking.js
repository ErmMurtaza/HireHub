import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { WorkerContext } from "../context/WorkerContext";
import Navbar from "../components/Navbar";

const Booking = () => {
  const { id } = useParams();
  const { workers, addBooking } = useContext(WorkerContext);
  const worker = workers.find((w) => w.id === parseInt(id));
  const [hours, setHours] = useState(1);
  const [paid, setPaid] = useState(false);

  const handleBooking = () => {
    addBooking({ workerId: worker.id, hours, total: hours * worker.price });
    alert("Booking successful!");
  };

  if (!worker) return <p>Worker not found</p>;

    const handlePayment = () => {
    alert(`Paid ₹${hours * worker.price} successfully!`);
    setPaid(true);
    handleBooking();
    };

    // in JSX
    
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Booking {worker.name}</h2>
        <p>Profession: {worker.profession}</p>
        <p>Hourly Rate: ₹{worker.price}</p>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value))}
          min="1"
        /> hours
        <p>Total: ₹{hours * worker.price}</p>
        <button onClick={handleBooking}>Confirm Booking</button>
        {!paid && <button onClick={handlePayment}>Pay & Book</button>}
        {paid && <p>Booking Confirmed!</p>}
      </div>
    </>
  );
};

export default Booking;
