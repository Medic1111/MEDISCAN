import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
