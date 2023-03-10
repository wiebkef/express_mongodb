const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    lastname: { type: String, required: [true, "Lastname is required"] },
    firstname: { type: String, required: [true, "Firstname is required"] },
    email: { type: String, required: [true, "Email is required"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
