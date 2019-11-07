import React, { Component } from "react";
import * as api from "../utils/api";
import * as helper from "../utils/helperFuncs";
import "../css/ArticleComments.css";
import Voter from "./Voter";

class ArticleComments extends Component {
  state = { comments: [], commentInput: "", isLoading: true };
  render() {
    const { comments, commentInput, isLoading } = this.state;
    return (
      <ul className="ArticleComments">
        {isLoading && <h2>Page Loading...</h2>}
        {!isLoading && (
          <div>
            <h2>Post New Comment:</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                <textarea
                  type="text"
                  onChange={this.handleChange}
                  value={commentInput}
                  required
                >
                  {" "}
                </textarea>
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
          </div>
        )}
      </ul>
    );
  }
  componentDidMount() {
    api.getArticleComments(this.props.article_id).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
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
