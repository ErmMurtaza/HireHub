import React, { useContext } from "react";
import { WorkerContext } from "../context/WorkerContext";
import Navbar from "../components/Navbar";
import styles from "../styles/BookingHistory.module.css";

const BookingHistory = () => {
  const { bookings, workers } = useContext(WorkerContext);

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h2 className={styles.title}>Your Booking History</h2>

        {bookings.length === 0 ? (
          <p className={styles.noData}>No bookings yet</p>
        ) : (
          bookings.map((b) => {
            const worker = workers.find((w) => w.id === b.workerId);
            return (
              <div key={b.id} className={styles.card}>
                
                <div className={styles.workerImg}>
                  <img src={`https://i.pravatar.cc/150?u=${worker?.id}`} alt={worker?.name} />
                </div>

                <div className={styles.info}>
                  <h3>{worker?.name}</h3>
                  <p>Profession: {worker?.profession}</p>
                  <p>Hours Booked: {b.hours}</p>
                </div>

                <div className={styles.priceTag}>
                  ₹{b.total}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default BookingHistory;
