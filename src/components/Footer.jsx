import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <h5>Copyright: {new Date().getFullYear()}</h5>
    </div>
  );
};

export default Footer;
