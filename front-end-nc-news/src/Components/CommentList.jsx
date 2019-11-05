import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  componentDidMount() {
    api.fetchCommentsByArticle(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }
  render() {
    const { comments, isLoading } = this.state;
    return (
      <div className="comment-list">
        {!isLoading &&
          comments.map(comment => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
      </div>
    );
  }
}

export default CommentList;
