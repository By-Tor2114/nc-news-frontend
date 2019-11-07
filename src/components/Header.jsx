import React from "react";
import "../css/Header.css";
import { Link } from "@reach/router";

const Header = ({ username }) => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>
          NC <span className="text-primary">News</span>
        </h1>
      </Link>
      <p>
        Logged in as: <span className="text-primary">{username}</span>
      </p>
    </div>
  );
};

export default Header;
