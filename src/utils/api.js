const axios = require("axios");
const baseURL = "https://by-tor2114-nc-news.herokuapp.com/api";

exports.getArticles = topic => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data;
    });
};

exports.getIndividualArticle = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data;
  });
};
