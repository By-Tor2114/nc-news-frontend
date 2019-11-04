import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/:topic_slug" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
