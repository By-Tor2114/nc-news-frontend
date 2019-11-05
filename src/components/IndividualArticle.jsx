import React, { Component } from "react";
import * as api from "../utils/api";

class IndividualArticle extends Component {
  state = { article: {}, isLoading: false };
  render() {
    const {
      author,
      title,
      body,
      created_at,
      votes,
      topic
    } = this.state.article;
    return (
      <div>
        <h2>Author: {author}</h2>
        <h3>Article Title: {title}</h3>
        <h4>Topic: {topic}</h4>
        <p>{body}</p>
        <h4>Vote Count: {votes}</h4>
      </div>
    );
  }
  componentDidMount() {
    api.getIndividualArticle(this.props.article_id).then(({ article }) => {
      this.setState({ article, isLoading: false });
    });
  }
}

export default IndividualArticle;
