import React, { Component } from "react";
import * as api from "../utils/api";
import * as helper from "../utils/helperFuncs";
import "./ArticleComments.css";

class ArticleComments extends Component {
  state = { comments: [] };
  render() {
    console.log(this.props);

    const { comments } = this.state;
    return (
      <ul className="ArticleComments">
        <h2>Post New Comment:</h2>
        <form>
          <label>
            <input type="text" />
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
              <h4>Vote Count: {comment.votes}</h4>
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
}

export default ArticleComments;
