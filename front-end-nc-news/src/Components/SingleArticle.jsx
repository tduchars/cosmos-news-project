import React, { Component } from 'react';
import * as api from '../utils/api';
import Votes from './Votes';

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };
  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }
  render() {
    const { isLoading, article } = this.state;
    return (
      <div>
        {!isLoading && (
          <>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <p>
              <span className="tags">&lt;</span>
              {article.author}
              <span className="tags">/&gt;</span>
            </p>
            <Votes />
          </>
        )}
      </div>
    );
  }
}

export default SingleArticle;
