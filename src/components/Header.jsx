import React, { Component } from "react";
import "../css/Header.css";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class Header extends Component {
  state = {
    users: [],
    loggedInAs: "Please select from below"
  };
  render() {
    const { users, loggedInAs } = this.state;
    return (
      <div className="Header">
        <Link to="/">
          <h1>
            NC <span className="text-primary">News</span>
          </h1>
        </Link>
        <p>
          Logged in as: <span className="text-primary">{loggedInAs}</span>
        </p>
        <select onChange={this.handleChange}>
          <option value="Select User" selected disabled>
            Select User
          </option>
          {users.map((user, index) => {
            return <option key={index}>{user.username}</option>;
          })}
        </select>
      </div>
    );
  }
  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users: users.users });
    });
  }

  handleChange = event => {
    const username = event.target.value;
    this.props.handleUser(username);
    this.setState({ loggedInAs: username });
  };
}

export default Header;
