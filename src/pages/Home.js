import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { WorkerContext } from "../context/WorkerContext";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
const Home = () => {
  const { workers } = useContext(WorkerContext);
  const featuredWorkers = workers.slice(0, 3);
  const categories = ["Plumber", "Electrician", "Carpenter", "Cleaner", "Painter"];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Find Trusted & Skilled Workers Near You</h1>
          <p>UrbanWorkers helps you hire professionals instantly. Fast, reliable & affordable service.</p>
          <Link to="/workers">
            <button className={styles.heroBtn}>Explore Workers</button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.section}>
        <h2>Browse Categories</h2>
        <div className={styles.categoryRow}>
          {categories.map((cat) => (
            <div key={cat} className={styles.categoryCard}>
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Workers */}
      <div className={styles.section}>
        <h2>Featured Workers</h2>
        <div className={styles.workerGrid}>
          {featuredWorkers.length === 0 && <p>No workers yet. Add one!</p>}

          {featuredWorkers.map((w) => (
            <div key={w.id} className={styles.workerCard}>
              <img
                src={`https://i.pravatar.cc/300?u=${w.id}`}
                alt={w.name}
                className={styles.workerImg}
              />

              <h3>{w.name}</h3>
              <p>{w.profession}</p>
              <p className={styles.price}>₹{w.price}/hr</p>

              <Link to={`/booking/${w.id}`}>
                <button className={styles.bookBtn}>Book Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2>Are You a Professional Worker?</h2>
        <p>Join UrbanWorkers and get more clients every day!</p>
        <Link to="/add-worker">
          <button className={styles.ctaBtn}>Register as Worker</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Home;
