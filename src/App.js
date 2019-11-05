import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import IndividualArticle from "./components/IndividualArticle";
import ArticleComments from "./components/ArticleComments";

class App extends Component {
  state = { username: "weegembump" };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header username={username} />
        <Nav />
        <Router primary={false}>
          <ArticleList path="/" />
          <ArticleList path="/:topic_slug" />
          <IndividualArticle path="/articles/:article_id" />
          <ArticleComments
            username={username}
            path="/articles/:article_id/comments"
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
