import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };
  componentDidMount() {
    api.fetchAllArticles(this.props.topics).then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false });
    });
  }
  render() {
    const { isLoading, articles } = this.state;
    return (
      <div className="articles-list">
        {!isLoading &&
          articles.map((article, idx) => {
            return (
              <Link
                className="article-card"
                to={`/articles/${article.article_id}`}
              >
                <ArticleCard article={article} key={article.article_id} />
              </Link>
            );
          })}
      </div>
    );
  }
}

export default ArticlesList;
