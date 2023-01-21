import React, { Fragment } from "react";
import "./About.css";
import Metadata from "../layout/Metadata";

const About = () => {
  return (
    <Fragment>
      <Metadata title={`About Us`} />
      <div className="aboutPage">
        <div className="aboutContainer">
          <h1 className="aboutHeading">About Us</h1>
          <p>
            <span>Our name</span> is a web based application.
            <br />
            Write up here!
          </p>
          <div>
            <span>Made with ❤️</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
