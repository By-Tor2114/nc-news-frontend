import React from "react";

const Header = props => {
  return (
    <div className="Header">
      <h1>
        NC <span className="text-primary">News</span>
      </h1>
      <p>Logged in as: {props.username}</p>
    </div>
  );
};

export default Header;
