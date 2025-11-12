import React, { createContext, useState } from "react";

// Create Context
export const WorkerContext = createContext();

// Provider
export const WorkerProvider = ({ children }) => {
  const [workers, setWorkers] = useState([]);
  const [bookings, setBookings] = useState([]);

  const addWorker = (worker) => {
    setWorkers([...workers, { id: Date.now(), ...worker }]);
  };

  const addBooking = (booking) => {
    setBookings([...bookings, { id: Date.now(), ...booking }]);
  };

  return (
    <WorkerContext.Provider value={{ workers, bookings, addWorker, addBooking }}>
      {children}
    </WorkerContext.Provider>
  );
};
