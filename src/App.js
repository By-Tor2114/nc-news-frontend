import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import IndividualArticle from "./components/IndividualArticle";
import HandleErrors from "./components/HandleErrors";

class App extends Component {
  state = { username: "" };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header handleUser={this.handleUser} />
        <Nav />
        <Router primary={false}>
          <HandleErrors default />
          <ArticleList path="/" />
          <ArticleList path="/:topic_slug" />
          <IndividualArticle username={username} path="/articles/:article_id" />
        </Router>
        <Footer />
      </div>
    );
  }
  handleUser = user => {
    this.setState({ username: user });
  };
}

export default App;
