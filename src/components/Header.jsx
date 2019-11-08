import React, { Component } from "react";
import "../css/Header.css";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <h1>
            NC <span className="text-primary">News</span>
          </h1>
        </Link>
        <p>
          Logged in as:{" "}
          <span className="text-primary">{this.props.username}</span>
        </p>
      </div>
    );
  }
  componentDidMount() {
    api.getUsers().then(response => {});
  }
}

export default Header;
