import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { WorkerContext } from "../context/WorkerContext";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
const Home = () => {
  const { workers } = useContext(WorkerContext);
  const featuredWorkers = workers.slice(0, 5);
  const categories = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "Cleaner",
    "Painter",
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Find Trusted & Skilled Workers Near You</h1>
          <p>
            HireHub helps you hire professionals instantly. Fast, reliable &
            affordable service.
          </p>
          <Link to="/workers">
            <button className={styles.heroBtn}>Explore Workers</button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className={`${styles.section} ${styles.lightSection}`}>
        <h2>Browse Categories</h2>
        <div className={styles.categoryRow}>
          {categories.map((cat) => (
            <div key={cat} className={styles.categoryCard}>
              {cat}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.graySection}>
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <h3>5,000+</h3>
            <p>Verified Workers</p>
          </div>
          <div className={styles.statCard}>
            <h3>20,000+</h3>
            <p>Jobs Completed</p>
          </div>
          <div className={styles.statCard}>
            <h3>4.8★</h3>
            <p>Average Rating</p>
          </div>
          <div className={styles.statCard}>
            <h3>15+</h3>
            <p>Cities Served</p>
          </div>
        </div>
      </div>

      {/* Featured Workers */}
      <div className={`${styles.section} ${styles.whiteSection}`}>
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

      <div className={`${styles.section} ${styles.whiteSection}`}>
        <h2>How HireHub Works</h2>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <span>1</span>
            <h3>Choose a Service</h3>
            <p>Browse verified professionals by category</p>
          </div>

          <div className={styles.stepCard}>
            <span>2</span>
            <h3>Book Instantly</h3>
            <p>Select date, time & confirm booking</p>
          </div>

          <div className={styles.stepCard}>
            <span>3</span>
            <h3>Relax & Pay Securely</h3>
            <p>Get quality service with transparent pricing</p>
          </div>
        </div>
      </div>

      <div className={`${styles.section} ${styles.gradientSection}`}>
        <h2>What Our Users Say</h2>

        <div className={styles.testimonialGrid}>
          <div className={styles.testimonial}>
            <p>"Quick booking and excellent service. Highly recommended!"</p>
            <h4>- Rahul, Bangalore</h4>
          </div>

          <div className={styles.testimonial}>
            <p>"Very professional workers and transparent pricing."</p>
            <h4>- Anjali, Delhi</h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2>Are You a Professional Worker?</h2>
        <p>Join HireHub and get more clients every day!</p>
        <Link to="/add-worker">
          <button className={styles.ctaBtn}>Register as Worker</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Home;
