import React, { Component } from 'react';
import * as api from '../utils/api';
import Voter from './Voter';
import CommentList from './CommentList';

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    username: localStorage.getItem('username'),
    allowVotes: false
  };
  componentDidMount() {
    api
      .fetchArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .then(() => {
        api.fetchAllUsers().then(response => {
          const checkUserValid = response.filter(user => {
            return user.username === this.state.username;
          });
          if (checkUserValid.length > 0) {
            this.setState({ allowVotes: true });
          }
        });
      });
  }
  render() {
    const { isLoading, article } = this.state;
    return (
      <div className="single-article-page">
        {!isLoading && (
          <>
            <div className="single-article-card">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
              <p>
                <span className="tags">&lt;</span>
                {article.author}
                <span className="tags">/&gt;</span>
              </p>
              <Voter
                prefix={'articles'}
                votes={article.votes}
                article_id={article.article_id}
                allowVotes={this.state.allowVotes}
              />
            </div>
            <CommentList
              article_id={article.article_id}
              allowVotes={this.state.allowVotes}
              username={this.state.username}
            />
          </>
        )}
      </div>
    );
  }
}

export default SingleArticle;
