import React, { Fragment, useContext, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import image from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authCtx } from "../../features/auth-ctx";

const Home = () => {
  const nav = useNavigate();
  const authMgr = useContext(authCtx);
  const validateCookie = async () => {
    await axios
      .get("/api/v1/auth/validate")
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data);
        authMgr.setIsAuth(true);
      })
      .catch((err) => {
        authMgr.setIsAuth(false);
        nav("/");
      });
  };

  useEffect(() => {
    validateCookie();
  }, []);
  return (
    <Fragment>
      <div className="home-page">
        <div className="home-page-content">
          <div className="image-container">
            <img src={image} alt="site-image" />
          </div>
          <div className="text-container">
            <h1 style={{ color: "#39375B" }}>Welcome to Our Site</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
            </p>
            <Link to="/disclaimer">
              <strong>
                <a className="read">
                  Please read HIPPA details and disclaimer.
                </a>
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
