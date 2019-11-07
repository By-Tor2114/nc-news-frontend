import React, { Component } from "react";
import * as api from "../utils/api";
import * as helper from "../utils/helperFuncs";
import "../css/ArticleList.css";
import { Link } from "@reach/router";
import Voter from "./Voter";
import HandleErrors from "./HandleErrors";

class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "asc",
    isLoading: true,
    err: null
  };
  render() {
    const { articles, isLoading, err } = this.state;

    return (
      <div className="ArticleList">
        {isLoading && !err && <h2>Page Loading...</h2>}
        {err && <HandleErrors error={err.response.data.msg} />}
        {!isLoading && (
          <form onSubmit={this.getSortedArticles}>
            <span>Sort by: </span>
            <select name="sort" onChange={this.sortBy}>
              <option value="created_at">Date Posted</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes </option>
            </select>
            <select name="order" onChange={this.orderBy}>
              <option value="asc">asc</option>
              <option value="desc">desc</option>
            </select>
            <button className="Go">Go!</button>
          </form>
        )}
        {!isLoading && !err && (
          <ul>
            {articles.map(article => {
              return (
                <li key={article.article_id}>
                  <h3>Article Title: {article.title}</h3>
                  <h4>Posted On: {helper.dateFormat(article.created_at)}</h4>
                  <h4>Author: {article.author}</h4>
                  <h4>Topic: {article.topic}</h4>
                  <h4>Comment Count: {article.comment_count}</h4>
                  <Voter
                    type="articles"
                    id={article.article_id}
                    votes={article.votes}
                  />
                  <h4>
                    <Link to={`/articles/${article.article_id}`}>
                      <button> Click For Full Article</button>
                    </Link>
                  </h4>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    api
      .getArticles(this.props.topic_slug)
      .then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic_slug !== prevProps.topic_slug) {
      api.getArticles(this.props.topic_slug).then(({ articles }) => {
        this.setState({ articles, isLoading: false, err: null });
      });
    }
  }

  sortBy = event => {
    this.setState({ sort_by: event.target.value });
  };

  orderBy = event => {
    this.setState({ order: event.target.value });
  };

  getSortedArticles = event => {
    event.preventDefault();
    api
      .getArticles(this.props.topic_slug, this.state.sort_by, this.state.order)
      .then(({ articles }) => {
        this.setState({ articles });
      });
  };
}

export default ArticleList;
