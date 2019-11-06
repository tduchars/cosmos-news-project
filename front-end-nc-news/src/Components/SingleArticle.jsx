import React, { Component } from 'react';
import * as api from '../utils/api';
import Voter from './Voter';
import CommentList from './CommentList';
import { JellyfishSpinner } from 'react-spinners-kit';
import HandleError from './HandleError';

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    username: localStorage.getItem('username'),
    allowVotes: false,
    err: ''
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
      })
      .catch(err => {
        this.setState({
          err: 'No Article for that ID...'
        });
      });
  }
  render() {
    const { isLoading, article, err } = this.state;
    if (err) return <HandleError err={err} />;
    return (
      <div className="single-article-page">
        {!isLoading ? (
          <>
            {err ? (
              <HandleError />
            ) : (
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
            )}
            <CommentList
              article_id={article.article_id}
              allowVotes={this.state.allowVotes}
              username={this.state.username}
            />
          </>
        ) : (
          <div className="loader">
            <JellyfishSpinner size={80} color="#ba1f31" />
          </div>
        )}
      </div>
    );
  }
}

export default SingleArticle;
