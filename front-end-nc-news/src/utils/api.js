const axios = require('axios');

export const fetchAllTopics = () => {
  return axios
    .get('https://nc-tabloid.herokuapp.com/api/topics')
    .then(topics => {
      return topics;
    });
};

export const fetchAllArticles = (topic, sort_by) => {
  return axios
    .get('https://nc-tabloid.herokuapp.com/api/articles', {
      params: {
        topic,
        sort_by
      }
    })
    .then(articles => {
      return articles;
    });
};

export const fetchArticleById = article_id => {
  return axios
    .get(`https://nc-tabloid.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchCommentsByArticle = article_id => {
  return axios
    .get(`https://nc-tabloid.herokuapp.com/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
