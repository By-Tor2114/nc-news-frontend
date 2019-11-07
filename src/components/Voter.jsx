import React, { Component } from "react";
import "../css/Voter.css";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    voteIncrement: 0
  };
  render() {
    return (
      <div className="Voter">
        <button
          onClick={this.handleVote}
          value="1"
          disabled={this.state.voteIncrement > 0 && true}
        >
          Up Vote
        </button>
        <h4>Vote Count: {this.props.votes + this.state.voteIncrement}</h4>
        <button
          onClick={this.handleVote}
          value="-1"
          disabled={this.state.voteIncrement < 0 && true}
        >
          Down Vote
        </button>
      </div>
    );
  }

  handleVote = event => {
    const voteChange = event.target.value;
    api.sendVote(this.props.type, this.props.id, voteChange).then(() => {
      this.setState(currentState => {
        return { voteIncrement: currentState.voteIncrement + +voteChange };
      });
    });
  };
}

export default Voter;
