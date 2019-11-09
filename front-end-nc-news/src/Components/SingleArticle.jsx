import React, { Component } from 'react';
import * as api from '../utils/api';
import Voter from './Voter';
import CommentList from './CommentList';
import { SphereSpinner } from 'react-spinners-kit';
import HandleError from './HandleError';

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    username: localStorage.getItem('username'),
    allowVotes: false,
    err: '',
    avatarUrl: localStorage.getItem('avatar')
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
          err: 'no article found...'
        });
      });
  }
  render() {
    const { isLoading, article, err, avatarUrl } = this.state;
    if (err) return <HandleError err={err} />;
    return (
      <div className="single-article-page">
        {!isLoading ? (
          <>
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="users avatar icon"
                className="user-avatar-icon-style"
              ></img>
            )}
            <div className="single-article-card">
              <h3 className="article-card-title">{article.title}</h3>
              <div className="author-under-title">
                <span className="tags">&lt;</span>
                {article.author}
                <span className="tags">/&gt;</span>
              </div>
              <hr className="title-underline" align="left" />
              <p className="article-card-blurb">{article.body}</p>
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
        ) : (
          <div className="loader">
            <SphereSpinner size={40} color="#bb86fc" />
          </div>
        )}
      </div>
    );
  }
}

export default SingleArticle;
