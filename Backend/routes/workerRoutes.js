const express = require("express");
const router = express.Router();
const {
  getWorkers,
  addWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/workerController");

router.get("/", getWorkers);
router.post("/", addWorker);
router.put("/:id", updateWorker);
router.delete("/:id", deleteWorker);

module.exports = router;
