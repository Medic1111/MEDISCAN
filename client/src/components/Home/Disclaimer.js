import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";
import Metadata from "../layout/Metadata";
import "./Home.css";

const Disclaimer = () => {
  const authMgr = useContext(authCtx);
  const nav = useNavigate();
  return (
    <Fragment>
      <Metadata title={`Disclaimer`} />
      <div className="aboutPage">
        <div className="aboutContainer">
          <h1 className="aboutHeading">Disclaimer</h1>
          <p>
            <strong>Details about HIPPA</strong>
          </p>
          <p>
            {" "}
            <strong>
              The Privacy Rule protects all "individually identifiable health
              information" held or transmitted by a covered entity or its
              business associate, in any form or media, whether electronic,
              paper, or oral. The Privacy Rule calls this information "protected
              health information (PHI)."
            </strong>
          </p>
          <p>
            <strong>
              You understand that any use of this application serves are a
              CONSENT to sharing information you provided with anyone who has
              access to this platform.
            </strong>
          </p>
          <div style={{ margin: "90px" }}>
            <button
              className="consent-btn"
              onClick={() => nav(`/medical/form`)}
            >
              I give consent
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Disclaimer;
