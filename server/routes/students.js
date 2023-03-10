const express = require("express");
const studentsRouter = express.Router();
const {
  getAllStudents,
  updateStudent,
  createStudent,
  getStudentById,
} = require("../controllers/students");

studentsRouter.get("/", getAllStudents);
studentsRouter.put("/:id", updateStudent);
studentsRouter.post("/", createStudent);
studentsRouter.get("/:id", getStudentById);

module.exports = studentsRouter;
