import React, { useState } from "react";
import axios from "../axiosInstance";

const NewStudent = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/students/`, form)
      .then((res) => {
        console.log("hat geklappt", res.data);
      })
      .catch((err) => setError(err.response.data.message));
    setForm("");
  };

  return (
    <form className="flex flex-col gap-2 rounded-lg">
      <h2>Add student</h2>
      <input
        placeholder="Firstname"
        name="firstname"
        onChange={(e) => {
          console.log(e.target.name);
          setForm({
            ...form,
            firstname: e.target.value,
          });
        }}
      />
      <input
        placeholder="Lastname"
        name="lastname"
        onChange={(e) => {
          console.log(e.target.name);

          setForm({
            ...form,
            lastname: e.target.value,
          });
        }}
      />
      <input
        placeholder="Email"
        name="email"
        onChange={(e) => {
          console.log(e.target.name);

          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />
      <button onClick={handleSubmit} className="bg-white">
        Add
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
