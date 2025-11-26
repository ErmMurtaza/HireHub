import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { WorkerContext } from "../context/WorkerContext";
import styles from "../styles/AddWorker.module.css";

const AddWorker = () => {
  const { addWorker } = useContext(WorkerContext);

  const [worker, setWorker] = useState({
    name: "",
    profession: "",
    price: "",
  });

  const handleChange = (e) => {
    setWorker({ ...worker, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorker(worker);
    setWorker({ name: "", profession: "", price: "" });
    alert("Worker added successfully!");
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h2 className={styles.title}>Add New Worker</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={worker.name}
            onChange={handleChange}
            placeholder="Worker Name"
            required
            className={styles.input}
          />

          <input
            name="profession"
            value={worker.profession}
            onChange={handleChange}
            placeholder="Profession (e.g., Electrician)"
            required
            className={styles.input}
          />

          <input
            name="price"
            value={worker.price}
            onChange={handleChange}
            placeholder="Hourly Rate (₹)"
            type="number"
            required
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Add Worker
          </button>
        </form>
      </div>
    </>
  );
};

export default AddWorker;
