import { useContext } from "react";
import { authCtx } from "../../features/auth-ctx";
import QRCode from "../QRCode/QRCode";
import classes from "./User.module.css";

const User = () => {
  const authMgr = useContext(authCtx);

  return (
    <section className={classes.section}>
      <h2>Welcome {authMgr.currentUser.username}</h2>
      <li>
        Your allergies:
        {authMgr.currentUser.allergies.map((el, index) => {
          return <p>{el}</p>;
        })}
      </li>
      <li>
        Your Past Medical History:
        {authMgr.currentUser.medical_history.map((el, index) => {
          return <p>{el}</p>;
        })}
      </li>
      <li>
        Your Medications:
        {authMgr.currentUser.medications.map((el, index) => {
          return <p>{el}</p>;
        })}
      </li>
      <p>Your QR</p>
      <QRCode url={authMgr.currentUser._id} />
    </section>
  );
};

export default User;
