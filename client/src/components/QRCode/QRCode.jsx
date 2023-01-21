import { QRCodeCanvas } from "qrcode.react";
import classes from "./QRCode.module.css";

const QRCode = ({ url }) => {
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
      {codeTag}
      <button onClick={printHandler} className={classes.btn}>
        Print
      </button>
    </div>
  );
};

export default QRCode;
