import { QRCodeCanvas } from "qrcode.react";
import classes from "./QRCode.module.css";
import "./QRCode.css";

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
      <div style={{marginLeft: "50px", marginTop: "20px"}}>
        <button onClick={printHandler} className="print-btn">
          Print
        </button>
      </div>
    </div>
  );
};

export default QRCode;
