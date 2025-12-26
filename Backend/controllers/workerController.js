const Worker = require("../models/Worker");

// GET all workers
exports.getWorkers = async (req, res) => {
  try {
    const workers = await Worker.getAll();
    res.json(workers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD worker
exports.addWorker = (req, res) => {
  const { name, profession, price } = req.body;

  if (!name || !profession || !price) {
    return res.status(400).json({ message: "All fields required" });
  }
  const newWorker = {
    name,
    profession,
    price,
  };
  Worker.create(newWorker);
  res.status(201).json({
    message: "Worker added successfully",
    data: newWorker,
  });
};

// ✅ UPDATE
exports.updateWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, profession, price } = req.body;

    if (!name || !profession || !price) {
      return res.status(400).json({ message: "All fields required" });
    }

    const updated = await Worker.update(id, {
      name,
      profession,
      price,
    });

    if (updated === 0) {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.json({ message: "Worker updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Update failed" });
  }
};

// DELETE worker
exports.deleteWorker = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Worker.delete(id);

    if (deleted === 0) {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.json({ message: "Worker deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Delete failed" });
  }
};
