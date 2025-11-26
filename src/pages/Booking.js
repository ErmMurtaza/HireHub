import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { WorkerContext } from "../context/WorkerContext";
import Navbar from "../components/Navbar";
import styles from "../styles/Booking.module.css";

const Booking = () => {
  const { id } = useParams();
  const { workers, addBooking } = useContext(WorkerContext);
  const worker = workers.find((w) => w.id === parseInt(id));
  const [hours, setHours] = useState(1);
  const [paid, setPaid] = useState(false);

  if (!worker) return <p>Worker not found</p>;

  const totalAmount = hours * worker.price;

  const handleBooking = () => {
    addBooking({ workerId: worker.id, hours, total: totalAmount });
    alert("Booking successful!");
  };

  const handlePayment = () => {
    alert(`Paid ₹${totalAmount} successfully!`);
    setPaid(true);
    handleBooking();
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Book {worker.name}</h2>
        </div>

        <div className={styles.workerImg}>
          <img src={`https://i.pravatar.cc/150?u=${worker.id}`} alt={worker.name} />
        </div>

        <div className={styles.details}>
          <p><strong>Profession:</strong> {worker.profession}</p>
          <p><strong>Hourly Rate:</strong> ₹{worker.price}</p>
        </div>

        <div className={styles.inputBox}>
          <label><strong>Hours Required:</strong></label>
          <br />
          <input
            type="number"
            value={hours}
            min="1"
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
        </div>

        <p className={styles.total}>Total: ₹{totalAmount}</p>

        <button className={styles.btnPrimary} onClick={handleBooking}>
          Confirm Booking
        </button>

        {!paid && (
          <button className={styles.btnPay} onClick={handlePayment}>
            Pay & Book
          </button>
        )}

        {paid && <p className={styles.confirmMsg}>✔ Booking Confirmed!</p>}
      </div>
    </>
  );
};

export default Booking;
