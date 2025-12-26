import React, { createContext, useState, useEffect } from "react";
import { getWorkers, addWorkerAPI , updateWorkerAPI , deleteWorkerAPI } from "../services/api";
// Create Context
export const WorkerContext = createContext();

// Provider
export const WorkerProvider = ({ children }) => {
  const [workers, setWorkers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const res = await getWorkers();
      setWorkers(res.data.data || res.data);
    } catch (err) {
      console.error("Error fetching workers", err);
    }
  };
  const addWorker = async (worker) => {
    const res = await addWorkerAPI(worker);
    setWorkers((prev) => [...prev, res.data.data]);
  };

  const updateWorker = async (id, data) => {
    await updateWorkerAPI(id, data);
    setWorkers((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...data } : w))
    );
  };

  const deleteWorker = async (id) => {
    await deleteWorkerAPI(id);
    setWorkers((prev) => prev.filter((w) => w.id !== id));
  };

  const addBooking = (booking) => {
    setBookings([...bookings, { id: Date.now(), ...booking }]);
  };

  return (
    <WorkerContext.Provider
      value={{ workers, bookings, addWorker, addBooking,updateWorker,deleteWorker }}
    >
      {children}
    </WorkerContext.Provider>
  );
};
