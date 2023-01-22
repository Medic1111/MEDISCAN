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
            <span>
              {" "}
              <strong>Mediscans</strong> is a web based application.
              <br />
              EMS providers rely on information about their patients in order to
              develop and implement care It is not uncommon though, for these
              professionals to face situations where the patient is unable to
              communicate, in which case, they need to look around for clues
              that could indicate patient's health status.
            </span>
          </p>
          <p>
            <span>
              {" "}
              E-chart resolves this problem. The patient signs up to the
              platform and creates a profile, which they will add, after HIPAA
              disclaimers, basic information required in every Patient Chart.
              The patient then receives a QR Code and a wallet card with this QR
              Code printed. In case of emergencies, EMS professionals can simply
              scan that card and have access to information such as allergies,
              medications, and past medical history, decreasing On-Scene time,
              and increasing the rate at which appropriate care is rendered.
            </span>
          </p>
          <div style={{margin: "70px"}}>
            <span>Made with ❤️</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
