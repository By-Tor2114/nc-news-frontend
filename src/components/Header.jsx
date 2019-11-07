import React from "react";
import "../css/Header.css";

const Header = props => {
  return (
    <div className="Header">
      <h1>
        NC <span className="text-primary">News</span>
      </h1>
      <p>
        Logged in as: <span className="text-primary">{props.username}</span>
      </p>
    </div>
  );
};

export default Header;
