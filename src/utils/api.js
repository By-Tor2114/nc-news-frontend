const axios = require("axios");
const baseURL = "https://by-tor2114-nc-news.herokuapp.com/api";

exports.getArticles = topic => {
  console.log(topic, "here");
  console.log("testing");

  return axios
    .get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data;
    });
};
