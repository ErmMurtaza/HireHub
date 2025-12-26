const db = require("../config/db");

exports.createBooking = async ({ workerId, hours, price }) => {
  const total = hours * price;

  const [result] = await db.query(
    "INSERT INTO bookings (worker_id, hours, total) VALUES (?, ?, ?)",
    [workerId, hours, total]
  );

  return result.insertId;
};

exports.getBookings = async () => {
  const [rows] = await db.query(`
    SELECT b.*, w.name, w.profession
    FROM bookings b
    JOIN workers w ON b.worker_id = w.id
    ORDER BY b.created_at DESC
  `);

  return rows;
};
