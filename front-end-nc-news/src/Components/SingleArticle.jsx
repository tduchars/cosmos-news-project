import React, { Component } from 'react';
import * as api from '../utils/api';
import Interact from './Interact';
import CommentList from './CommentList';

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
      <div className="single-article">
        {!isLoading && (
          <>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <p>
              <span className="tags">&lt;</span>
              {article.author}
              <span className="tags">/&gt;</span>
            </p>
            <Interact votes={article.votes} />
            <CommentList article_id={article.article_id} />
          </>
        )}
      </div>
    );
  }
}

export default SingleArticle;
