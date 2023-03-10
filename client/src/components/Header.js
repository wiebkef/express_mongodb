import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/newStudent" className="btn">
        Add Student
      </NavLink>
    </div>
  );
};

export default Header;
