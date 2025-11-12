import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>UrbanWorkers</div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/workers">Workers</Link>
        <Link to="/add-worker">Add Worker</Link>
        <Link to="/booking-history">Booking History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
