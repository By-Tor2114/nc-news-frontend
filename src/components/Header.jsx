import React from "react";

const Header = props => {
  return (
    <div className="Header">
      <h3>NC News</h3>
      <p>Logged in as: {props.username}</p>
    </div>
  );
};

export default Header;
