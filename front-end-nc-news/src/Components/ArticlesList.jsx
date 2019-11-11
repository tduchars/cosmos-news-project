import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Login from './Login';
import { SphereSpinner } from 'react-spinners-kit';
import HandleError from './HandleError';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: 'created_at',
    userLogged: localStorage.getItem('username'),
    avatarUrl: localStorage.getItem('avatar'),
    err: '',
    page: 1,
    maxPage: 8,
    showSorts: false
  };

  componentDidMount() {
    let userLogged = '';
    if (localStorage.getItem('username')) {
      userLogged = localStorage.getItem('username');
    }
    api
      .fetchAllArticles(this.props.topic)
      .then(({ data: { articles } }) => {
        this.setState({
          articles,
          isLoading: false,
          userLogged,
          err: '',
          page: 1
        });
      })
      .catch(() => {
        this.setState({
          err: 'invalid url...'
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy, page } = this.state;
    if (prevProps.topic !== topic) {
      this.setState({ page: 1, sortBy: 'created_at' }, () => {
        api
          .fetchAllArticles(topic, sortBy, 1, 100)
          .then(({ data: { articles } }) => {
            const maxPage = Math.ceil(articles.length / 5);
            this.setState({ maxPage });
          });
      });
    }
    if (prevState.sortBy !== sortBy) {
      this.setState({ page: 1 });
    }
    if (
      prevProps.topic !== topic ||
      prevState.sortBy !== sortBy ||
      prevState.page !== page
    ) {
      api
        .fetchAllArticles(topic, sortBy, page)
        .then(({ data: { articles } }) => {
          this.setState({ articles, isLoading: false });
        });
    }
  }

  handleClick = response => {
    this.setState({ sortBy: response });
  };

  addUsername = (userLogged, avatarUrl) => {
    this.setState({ userLogged, avatarUrl }, () => {
      localStorage.setItem('username', userLogged);
      localStorage.setItem('avatar', avatarUrl);
      window.location.reload().scrollTop(0, 0);
    });
  };

  flipShowSorts = () => {
    this.setState(currentState => {
      return {
        showSorts: !currentState.showSorts
      };
    });
  };

  changePage = e => {
    const value = e.target.name === 'next-page' ? 1 : -1;
    this.setState(
      currentState => {
        return {
          page: currentState.page + value
        };
      },
      () => {
        window.scrollTo(0, 0);
      }
    );
  };

  render() {
    const {
      isLoading,
      articles,
      userLogged,
      err,
      avatarUrl,
      showSorts,
      page,
      maxPage
    } = this.state;
    if (err) return <HandleError err={err} />;
    return (
      <>
        {!userLogged && <Login path="/login" addUsername={this.addUsername} />}
        {userLogged &&
          (avatarUrl && (
            <img
              src={avatarUrl}
              alt="users avatar icon"
              className="user-avatar-icon-style"
            ></img>
          ))}
        <div className="articles-list">
          <div>
            <button
              className="sort-by-filters-drop"
              onClick={this.flipShowSorts}
            >
              <strong>sort by</strong>
            </button>
            {showSorts && (
              <div className="sort-by-filters">
                <button
                  onClick={e => {
                    this.handleClick('created_at');
                  }}
                  className="filter-buttons"
                >
                  <strong>newest</strong>
                </button>
                <button
                  onClick={e => {
                    this.handleClick('votes');
                  }}
                  className="filter-buttons"
                >
                  <strong>popular</strong>
                </button>
                <button
                  onClick={e => {
                    this.handleClick('comment_count');
                  }}
                  className="filter-buttons"
                >
                  <strong>comments</strong>
                </button>
              </div>
            )}
          </div>

          {!isLoading ? (
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
            })
          ) : (
            <div className="loader">
              <SphereSpinner size={40} color="#bb86fc" />
            </div>
          )}
          <div>
            {page > 1 && (
              <button onClick={this.changePage} className="page-button">
                {page - 1}
              </button>
            )}
            <button disabled className="page-button">
              {page}
            </button>
            {page < maxPage && (
              <button
                onClick={this.changePage}
                name="next-page"
                className="page-button"
              >
                {page + 1}
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ArticlesList;
