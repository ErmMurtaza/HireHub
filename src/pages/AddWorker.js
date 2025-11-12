import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { WorkerContext } from "../context/WorkerContext";

const AddWorker = () => {
  const { addWorker } = useContext(WorkerContext);
  const [worker, setWorker] = useState({ name: "", profession: "", price: "" });

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
      <div style={{ maxWidth: "500px", margin: "50px auto" }}>
        <h2>Add Worker</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={worker.name}
            onChange={handleChange}
            placeholder="Name"
            required
          /><br /><br />
          <input
            name="profession"
            value={worker.profession}
            onChange={handleChange}
            placeholder="Profession"
            required
          /><br /><br />
          <input
            name="price"
            value={worker.price}
            onChange={handleChange}
            placeholder="Hourly Rate"
            type="number"
            required
          /><br /><br />
          <button type="submit">Add Worker</button>
        </form>
      </div>
    </>
  );
};

export default AddWorker;
