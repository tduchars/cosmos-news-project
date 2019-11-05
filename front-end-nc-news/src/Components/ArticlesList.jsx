import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Login from './Login';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: 'created_at',
    userLogged: ''
  };
  componentDidMount() {
    let userLogged = '';
    if (localStorage.getItem('username')) {
      userLogged = localStorage.getItem('username');
    }
    api.fetchAllArticles(this.props.topic).then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false, userLogged });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy } = this.state;
    if (prevProps.topic !== topic || prevState.sortBy !== sortBy) {
      api
        .fetchAllArticles(topic, this.state.sortBy)
        .then(({ data: { articles } }) => {
          this.setState({ articles, isLoading: false });
        });
    }
  }
  handleClick = response => {
    this.setState({ sortBy: response });
  };
  addUsername = userLogged => {
    this.setState({ userLogged }, () => {
      localStorage.setItem('username', userLogged);
    });
  };
  render() {
    const { isLoading, articles, userLogged } = this.state;
    return (
      <>
        {!userLogged && <Login path="/login" addUsername={this.addUsername} />}
        <div className="articles-list">
          <div className="dropdown-content">
            <button
              onClick={e => {
                this.handleClick('created_at');
              }}
            >
              NEW
            </button>
            <button
              onClick={e => {
                this.handleClick('votes');
              }}
            >
              VOTES
            </button>
            <button
              onClick={e => {
                this.handleClick('comment_count');
              }}
            >
              COMMENTS
            </button>
          </div>

          {!isLoading &&
            articles.map(article => {
              return (
                <Link
                  className="article-card"
                  to={`/articles/${article.article_id}`}
                  key={article.article_id}
                >
                  <ArticleCard article={article} />
                </Link>
              );
            })}
        </div>
      </>
    );
  }
}

export default ArticlesList;
