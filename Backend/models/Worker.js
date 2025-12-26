const db = require("../config/db");

const WorkerModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM workers");
    return rows;
  },

  create: async (worker) => {
    const { name, profession, price } = worker;
    const [result] = await db.query(
      "INSERT INTO workers (name, profession, price) VALUES (?, ?, ?)",
      [name, profession, price]
    );
    return { id: result.insertId, ...worker };
  },

  update: async (id, { name, profession, price }) => {
    const [result] = await db.query(
      `UPDATE workers 
       SET name = ?, profession = ?, price = ? 
       WHERE id = ?`,
      [name, profession, price, id]
    );

    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await db.query(
      "DELETE FROM workers WHERE id = ?",
      [id]
    );
    return result.affectedRows;
  },
};

module.exports = WorkerModel;
