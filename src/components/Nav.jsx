import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

const Nav = () => {
  return (
    <ul className="Nav-navbar">
      <p>Filter by Topic: </p>
      <li>
        <button>
          <Link to="/"> All </Link>
        </button>
      </li>
      <li>
        <button>
          <Link to="/cooking"> Cooking </Link>
        </button>
      </li>
      <li>
        <button>
          <Link to="/coding"> Coding</Link>
        </button>
      </li>
      <li>
        <button>
          <Link to="/football"> Football </Link>
        </button>
      </li>
    </ul>
  );
};

export default Nav;
