import React from "react";
import axios from "../axiosInstance";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`/api/students/${studentId}`)
      .then((res) => {
        console.log("HHHHHHHH", res.data);
        setStudent(res.data[0]);
      })
      .catch((err) => setError(err.response.data.message));
  }, [studentId]);

  return (
    <div>
      {student && (
        <div>
          <h2 className="text-3xl">Student</h2>
          <div>{student.firstname}</div>
          <div>{student.lastname}</div> <div>{student.email}</div>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Student;
