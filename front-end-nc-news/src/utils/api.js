const axios = require('axios');

export const fetchAllTopics = () => {
  return axios
    .get('https://nc-tabloid.herokuapp.com/api/topics')
    .then(topics => {
      return topics;
    });
};

export const fetchAllArticles = topic => {
  return axios
    .get('https://nc-tabloid.herokuapp.com/api/articles', {
      params: {
        topic
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
