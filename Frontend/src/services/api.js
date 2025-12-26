import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getWorkers = () => API.get("/workers");
export const addWorkerAPI = (data) => API.post("/workers", data);
export const updateWorkerAPI = (id, data) => API.put(`/workers/${id}`, data);
export const deleteWorkerAPI = (id) => API.delete(`/workers/${id}`);
export const createBooking = (data) => API.post("/bookings", data);
export const getBookings = () => API.get("/bookings");
