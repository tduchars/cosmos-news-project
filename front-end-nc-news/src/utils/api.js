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

export const fetchAllUsers = () => {
  return axios
    .get(`https://nc-tabloid.herokuapp.com/api/users`)
    .then(({ data: { users } }) => {
      return users;
    });
};

export const incrementArticleVote = (article_id, value, prefix) => {
  return axios
    .patch(`https://nc-tabloid.herokuapp.com/api/${prefix}/${article_id}`, {
      inc_votes: value
    })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const postCommentOnArticle = (username, article_id, body) => {
  return axios
    .post(
      `https://nc-tabloid.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username,
        body
      }
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return axios
    .delete(`https://nc-tabloid.herokuapp.com/api/comments/${comment_id}`)
    .then(response => {
      return response.status;
    });
};
