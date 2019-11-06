const axios = require("axios");
const baseURL = "https://by-tor2114-nc-news.herokuapp.com/api";

exports.getArticles = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic, sort_by, order }
    })
    .then(({ data }) => {
      return data;
    });
};

exports.getIndividualArticle = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data;
  });
};

exports.getArticleComments = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};

exports.postComment = (comment, user, article_id) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: user,
      body: comment
    })
    .then(({ data }) => {
      return data;
    });
};

exports.deleteComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`).then(res => {});
};
