import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        {/* Brand Section */}
        <div className={styles.section}>
          <h2 className={styles.logo}>HireHub</h2>
          <p className={styles.desc}>
            Your trusted platform to hire skilled professionals instantly.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/workers">Workers</Link></li>
            <li><Link to="/add-worker">Add Worker</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h3 className={styles.heading}>Contact</h3>
          <p>Email: support@HireHub.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} HireHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
