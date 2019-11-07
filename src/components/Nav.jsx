import React from "react";
import { Link } from "@reach/router";
import "../css/Nav.css";

const Nav = () => {
  return (
    <div className="Nav-navbar">
      <p>Choose Article Topic: </p>
      <ul>
        <li>
          <Link to="/">
            <button>All </button>
          </Link>
        </li>
        <li>
          <Link to="/cooking">
            {" "}
            <button>Cooking</button>{" "}
          </Link>
        </li>
        <li>
          <Link to="/coding">
            {" "}
            <button>Coding</button>
          </Link>
        </li>
        <li>
          <Link to="/football">
            {" "}
            <button>Football</button>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
