const express = require("express");
const studentsRouter = express.Router();
const {
  getAllStudents,
  updateStudent,
  createStudent,
  getStudentById,
} = require("../controllers/students");

// studentFinder is middleware for routes with /:id
const studentFinder = require("../middlewares/studentFinder");

studentsRouter.get("/", getAllStudents);

// studentFinder middleware needs to be added for every route, where it is necessary
studentsRouter.put("/:id", studentFinder, updateStudent);
studentsRouter.post("/", createStudent);
studentsRouter.get("/:id", studentFinder, getStudentById);

module.exports = studentsRouter;
