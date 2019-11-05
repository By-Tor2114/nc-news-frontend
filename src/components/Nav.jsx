import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

const Nav = () => {
  return (
    <ul className="Nav-navbar">
      <p>Choose Article Topic: </p>
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
  );
};

export default Nav;
