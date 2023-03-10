import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/new" className="btn">
        Add Student
      </NavLink>
    </div>
  );
};

export default Header;
