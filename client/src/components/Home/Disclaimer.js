import React, { Fragment } from "react";
import Metadata from "../layout/Metadata";

const Disclaimer = () => {
  return (
    <Fragment>
      <Metadata title={`Disclaimer`} />
      <div className="aboutPage">
        <div className="aboutContainer">
          <h1 className="aboutHeading">Disclaimer</h1>
          <p>Details about HIPPA</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Disclaimer;
