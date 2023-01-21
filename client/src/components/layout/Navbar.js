import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const authMgr = useContext(authCtx);

  const logoutHandler = async () => {
    await axios
      .get("/api/v1/auth/logout")
      .then((serverRes) => {
        authMgr.setCurrentUser({});
        authMgr.setIsAuth(false);
      })
      .catch((err) => console.log(err));
  };
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
          {!authMgr.isAuth && (
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          )}
          {authMgr.isAuth && (
            <li>
              <Link to={`/users/${authMgr.currentUser._id}`}>Account</Link>
            </li>
          )}
          {authMgr.isAuth && (
            <li>
              <Link onClick={logoutHandler} to="/">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
