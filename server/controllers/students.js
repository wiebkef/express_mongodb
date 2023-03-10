const Student = require("../models/student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate({ _id: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStudentById = async (req, res) => {
  try {
    const student = await Student.find({ _id: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllStudents,
  updateStudent,
  createStudent,
  getStudentById,
};
