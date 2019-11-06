import React, { Component } from "react";
import * as api from "../utils/api";
import * as helper from "../utils/helperFuncs";
import "./ArticleComments.css";
import Voter from "./Voter";

class ArticleComments extends Component {
  state = { comments: [], commentInput: "" };
  render() {
    const { comments, commentInput } = this.state;
    return (
      <ul className="ArticleComments">
        <h2>Post New Comment:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              value={commentInput}
              required
            />
            <button>Submit</button>
          </label>
        </form>
        <h2>Comments</h2>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h2>Author: {comment.author}</h2>
              <h4>Posted on: {helper.dateFormat(comment.created_at)}</h4>
              <p>{comment.body}</p>
              <Voter
                type="comments"
                id={comment.comment_id}
                votes={comment.votes}
              />
              {this.props.username === comment.author && (
                <button
                  onClick={() => {
                    this.removeComment(comment.comment_id);
                  }}
                >
                  Delete Comment
                </button>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
  componentDidMount() {
    api.getArticleComments(this.props.article_id).then(({ comments }) => {
      this.setState({ comments });
    });
  }

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postComment(
        this.state.commentInput,
        this.props.username,
        this.props.article_id
      )
      .then(({ comment }) => {
        this.setState(currentState => {
          return {
            comments: [comment, ...currentState.comments],
            commentInput: ""
          };
        });
      });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      api.getArticleComments(this.props.article_id).then(({ comments }) => {
        this.setState({ comments });
      });
    });
  };
}

export default ArticleComments;
