import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { WorkerContext } from "../context/WorkerContext";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { workers } = useContext(WorkerContext);
  const featuredWorkers = workers.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <h1>Welcome to UrbanWorkers</h1>
        <p>Find trusted workers for your daily tasks</p>
        <Link to="/workers">
          <button className={styles.heroButton}>View All Workers</button>
        </Link>
      </div>

      <div className={styles.featured}>
        <h2>Featured Workers</h2>
        <div className={styles.workerGrid}>
          {featuredWorkers.length === 0 && <p>No workers yet. Add one!</p>}
          {featuredWorkers.map((w) => (
            <div key={w.id} className={styles.workerCard}>
              <div className={styles.workerImg}>
                <img src={`https://i.pravatar.cc/150?u=${w.id}`} alt={w.name} />
              </div>
              <h3>{w.name}</h3>
              <p>Profession: {w.profession}</p>
              <p>Hourly Rate: ₹{w.price}</p>
              <Link to={`/booking/${w.id}`}>
                <button className={styles.bookBtn}>Book Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
