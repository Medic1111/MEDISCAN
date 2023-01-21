import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";
import Metadata from "../layout/Metadata";

const Disclaimer = () => {
  const authMgr = useContext(authCtx);
  const nav = useNavigate();
  return (
    <Fragment>
      <Metadata title={`Disclaimer`} />
      <div className="aboutPage">
        <div className="aboutContainer">
          <h1 className="aboutHeading">Disclaimer</h1>
          <p>Details about HIPPA</p>
          <p>
            {" "}
            The Privacy Rule protects all "individually identifiable health
            information" held or transmitted by a covered entity or its business
            associate, in any form or media, whether electronic, paper, or oral.
            The Privacy Rule calls this information "protected health
            information (PHI)."
          </p>
          <p>
            You understand that any use of this application serves are a CONSENT
            to sharing information you provided with anyone who has access to
            this platform.
          </p>
          ;
          <button onClick={() => nav(`/users/${authMgr.currentUser._id}`)}>
            I give consent
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Disclaimer;
