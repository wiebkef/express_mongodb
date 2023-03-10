import React from "react";
import axios from "../axiosInstance";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/students")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl">Students</h2>
      <ul className="grid sm:grid-cols-2 gap-4 place-content-center m-4">
        {students.map((student) => (
          <Link to={`/students/${student._id}`} key={student._id}>
            <li className="max-w-lg bg-white rounded shadow-md">
              <span>
                {student.first_name} {student.name}
              </span>
              <span>{student.email}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Students;
