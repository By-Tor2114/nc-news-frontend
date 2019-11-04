const axios = require("axios");

exports.getArticles = async () => {
  return axios
    .get("https://by-tor2114-nc-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
};
