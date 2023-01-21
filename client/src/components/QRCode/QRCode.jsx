import { useContext } from "react";
import { authCtx } from "../../features/auth-ctx";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import classes from "./QRCode.module.css";

const QRCode = ({ url }) => {
  const nav = useNavigate();
  const authMgr = useContext(authCtx);

  const printHandler = () => {
    window.print();
  };

  const codeTag = (
    <QRCodeCanvas
      id="qrCode"
      size={175}
      bgColor={"#f7f7f7"}
      level={"H"}
      value={`http://localhost:3000/scan/${url}`}
    />
  );

  return (
    <div className={classes.div}>
      <p className={classes.p}>Your QR Code is ready.</p>
      {codeTag}
      <button onClick={printHandler} className={classes.btn}>
        Print
      </button>
      <button
        onClick={() => nav(`/user/${authMgr.currentUser._id}`)}
        className={classes.btn}
      >
        Got it
      </button>
    </div>
  );
};

export default QRCode;
