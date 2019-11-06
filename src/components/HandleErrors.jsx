import React, { Component } from "react";
import "./HandleErrors.css";

class HandleErrors extends Component {
  render() {
    console.log(this.props.error);

    return (
      <div className="HandleErrors">
        <h2>
          Error: {this.props.error ? this.props.error : "Something went wrong"}
        </h2>
      </div>
    );
  }
}

export default HandleErrors;
