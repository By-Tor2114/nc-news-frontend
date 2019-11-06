import React, { Component } from "react";
import * as api from "../utils/api";
import * as helper from "../utils/helperFuncs";
import { Link } from "@reach/router";
import "./IndividualArticle.css";
import HandleErrors from "./HandleErrors";

class IndividualArticle extends Component {
  state = { article: {}, isLoading: true, err: null };
  render() {
    const { isLoading, err } = this.state;

    const {
      author,
      title,
      body,
      created_at,
      votes,
      topic,
      article_id
    } = this.state.article;
    return (
      <div className="IndividualArticle">
        {err && <HandleErrors error={this.state.err.response.data.msg} />}
        {!isLoading && !err && (
          <section>
            <h2>Author: {author}</h2>
            <h3>Article Title: {title}</h3>
            <h4>Posted On: {helper.dateFormat(created_at)}</h4>
            <h4>Topic: {topic}</h4>
            <p>{body}</p>
            <h4>Vote Count: {votes}</h4>
            <h4>
              <Link to={`/articles/${article_id}/comments`}>
                <button> Go To Article Comments</button>
              </Link>
            </h4>
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
        console.dir(err);
        this.setState({ err });
      });
  }
}

export default IndividualArticle;
