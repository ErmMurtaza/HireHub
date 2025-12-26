import React, { useContext, useState } from "react";
import { WorkerContext } from "../context/WorkerContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../styles/WorkerList.module.css";
import Footer from "../components/Footer";

const WorkerList = () => {
  const { workers, updateWorker, deleteWorker,setWorkers } = useContext(WorkerContext);
  const [search, setSearch] = useState("");
  const [filterProfession, setFilterProfession] = useState("");
  const [editWorker, setEditWorker] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", profession: "", price: "" });

  const filteredWorkers = workers.filter((w) => {
    return (
      w.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterProfession ? w.profession === filterProfession : true)
    );
  });

  const professions = [...new Set(workers.map((w) => w.profession))];

  const handleEditClick = (worker) => {
    setEditWorker(worker.id);
    setEditForm({ name: worker.name, profession: worker.profession, price: worker.price });
  };

  const handleEditSave = () => {
    updateWorker(editWorker , editForm);
    setEditWorker(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this worker?")) {
      deleteWorker(id);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Available Workers</h2>

        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filterProfession}
            onChange={(e) => setFilterProfession(e.target.value)}
          >
            <option value="">All Professions</option>
            {professions.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className={styles.workerGrid}>
          {filteredWorkers.length === 0 && <p>No workers available</p>}
          {filteredWorkers.map((w) => (
            <div key={w.id} className={styles.workerCard}>
              {editWorker === w.id ? (
                <>
                  <input
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  />
                  <input
                    value={editForm.profession}
                    onChange={(e) => setEditForm({ ...editForm, profession: e.target.value })}
                  />
                  <input
                    type="number"
                    value={editForm.price}
                    onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                  />
                  <button onClick={handleEditSave}>Save</button>
                  <button onClick={() => setEditWorker(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <h3>{w.name}</h3>
                  <p>Profession: {w.profession}</p>
                  <p>Hourly Rate: ₹{w.price}</p>
                  <Link to={`/booking/${w.id}`}><button>Book</button></Link>
                  <button onClick={() => handleEditClick(w)}>Edit</button>
                  <button onClick={() => handleDelete(w.id)}>Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkerList;
