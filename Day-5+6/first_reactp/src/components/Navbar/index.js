import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container nav">
        <div className="logo">REACT NAVBAR</div>
        <div className="links">
          <NavLink to="/home" className="link">Home</NavLink>
          <NavLink to="/home" className="btn btn-dark"> Hooks BTN</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
