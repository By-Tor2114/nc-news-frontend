import React, { Component } from "react";
import * as api from "../utils/api";
import "./ArticleList.css";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;

    return (
      <div className="ArticleList">
        {isLoading && <h2>Page Loading...</h2>}
        {!isLoading && (
          <ul>
            {articles.map(article => {
              return (
                <li key={article.article_id}>
                  <h3>Article Title: {article.title}</h3>
                  <h4>Author: {article.author}</h4>
                  <h4>Topic: {article.topic}</h4>
                  <h4>Comment Count: {article.comment_count}</h4>
                  <h4>Votes: {article.votes}</h4>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    api.getArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic_slug !== prevProps.topic_slug) {
      api.getArticles(this.props.topic_slug).then(({ articles }) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }
}

export default ArticleList;
