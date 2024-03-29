import React, { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/students/`, form)
      .then((res) => {
        console.log("hat geklappt", res.data);
        navigate(`/students/${res.data._id}`);
      })
      .catch((err) => {
        console.log("wuuuuuuuuuuuuuuuuuu", err.response.data.errors);
        setError(err.response.data.errors);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className="flex flex-col rounded-lg mx-auto bg-blue-100 px-8 pb-8">
      <h2 className="text-xl font-bold py-3">Enter new student record</h2>
      <input
        placeholder="Firstname"
        name="firstname"
        onChange={handleChange}
        className="mt-3 px-2"
      />
      {error.firstname ? (
        <p className="text-red-600 m-0 text-xs text-start">
          {error.firstname.message}
        </p>
      ) : (
        <p></p>
      )}
      <input
        placeholder="Lastname"
        name="lastname"
        onChange={handleChange}
        className="mt-3 px-2"
      />
      {error.lastname && (
        <span className="text-red-600 m-0 text-xs text-start">
          {error.lastname.message}
        </span>
      )}
      <input
        placeholder="Email"
        name="email"
        onChange={handleChange}
        className="mt-3 px-2"
      />
      {error.email && (
        <span className="text-red-600 m-0 text-xs text-start">
          {error.email.message}
        </span>
      )}
      <button onClick={handleSubmit} className="bg-white mt-3 ">
        Submit
      </button>
    </form>
  );
};

export default NewStudent;

/*
 <div className="bg-gray-800 flex flex-col justify-center">
   <form className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg">
     <h2 className="text-3xl text-gray-900 font-bold">Add Student</h2>
     <div className="flex flex-col text-gray-800 py-2">
       <label>Firstname</label>
       <input
         type="text"
         className="rounded-lg bg- focus:border-blue-100"
       ></input>
     </div>

     <div>
       <label>Lastname</label>
       <input type="text"></input>
     </div>
     <div>
       <label>Email</label>
       <input type="text"></input>
     </div>
     <button>Add</button>
   </form>
 </div>; */
