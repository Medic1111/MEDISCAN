import React, { Fragment, useContext, useEffect } from "react";
import "./Home.css";
//import { Link } from "react-router-dom";
import image from "../../images/logo.png";
import axios from "axios";
import { authCtx } from "../../features/auth-ctx";

const Home = () => {
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
            <img className="side-logo" src={image} alt="site-image" />
          </div>
          <div className="text-container">
            <h1 className="heading" style={{ color: "#39375B", fontSize: "40px" }}>
              Welcome to Our Site
            </h1>
            <p>
              EMS providers rely on information about their patients in order to
              develop and implement care. <br /> It is not uncommon though, for
              these professionals to face situations where the patient is unable
              to communicate, in which case, they need to look around for clues
              that could indicate patient's health status.
              <br />
              <p>
                <p>
                  E-chart resolves this problem. The patient signs up to the
                  platform and creates a profile, which they will add, after
                  HIPAA disclaimers, basic information required in every Patient
                  Chart.
                </p>
                <p>
                  The patient then receives a QR Code and a wallet card with
                  this QR Code printed.
                </p>
                <br /> <p></p>
              </p>
            </p>
            {/* <Link to="/disclaimer">
              <strong>
                <a className="read">
                  Please read HIPPA details and disclaimer.
                </a>
              </strong>
            </Link> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
