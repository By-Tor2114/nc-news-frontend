import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <h5 className="Footer">Copyright: {new Date().getFullYear()}</h5>
    </div>
  );
};

export default Footer;
