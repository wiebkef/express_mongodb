const Student = require("../models/student");
const ErrorResponse = require("../utils/errorResponse");
const studentFinder = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    req.reqStudent = student;
    next();
  } catch (error) {
    next(
      new ErrorResponse({
        message: `Can't find a student with id ${req.params.id} `,
        statusCode: 404,
      })
    );
  }
};
module.exports = studentFinder;
