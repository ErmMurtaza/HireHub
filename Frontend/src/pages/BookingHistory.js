import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/BookingHistory.module.css";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h2>Booking History</h2>

        {loading && <p>Loading bookings...</p>}

        {!loading && bookings.length === 0 && (
          <p>No bookings found</p>
        )}

        <div className={styles.bookingGrid}>
          {bookings.map((b) => (
            <div key={b.id} className={styles.card}>
              <h3>{b.name}</h3>
              <p className={styles.profession}>{b.profession}</p>

              <div className={styles.info}>
                <span>⏱ {b.hours} hrs</span>
                <span>💰 ₹{b.total}</span>
              </div>

              <p className={styles.date}>
                Booked on: {new Date(b.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookingHistory;
