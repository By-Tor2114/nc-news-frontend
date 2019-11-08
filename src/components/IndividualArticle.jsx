import React, { Component } from "react";
import * as api from "../utils/api";
import * as helper from "../utils/helperFuncs";
import "../css/IndividualArticle.css";
import HandleErrors from "./HandleErrors";
import Voter from "./Voter";
import ArticleComments from "./ArticleComments";

class IndividualArticle extends Component {
  state = { article: {}, isLoading: true, err: null };
  render() {
    const { article, isLoading, err } = this.state;

    const {
      author,
      title,
      body,
      created_at,
      topic,
      article_id
    } = this.state.article;
    return (
      <div className="IndividualArticle">
        {err && <HandleErrors error={this.state.err.response.data.msg} />}
        {!isLoading && !err && (
          <section>
            <h2>{title}</h2>
            <h3>Author: {author}</h3>
            <h4>Posted On: {helper.dateFormat(created_at)}</h4>
            <h4>Topic: {topic}</h4>
            <p>{body}</p>
            <Voter
              type="articles"
              id={article.article_id}
              votes={article.votes}
            />
            <ArticleComments
              username={this.props.username}
              article_id={article_id}
            />
          </section>
        )}
      </div>
    );
  }
  componentDidMount() {
    api
      .getIndividualArticle(this.props.article_id)
      .then(({ article }) => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default IndividualArticle;
