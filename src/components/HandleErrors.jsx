import React from "react";

const HandleErrors = props => {
  return (
    <div className="HandleErrors">
      <h2>Error: {props.error ? props.error : "Something went wrong"}</h2>
    </div>
  );
};

export default HandleErrors;
