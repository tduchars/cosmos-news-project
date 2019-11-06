import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import AddComment from './AddComment';

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
  commentAdder = body => {
    api
      .postCommentOnArticle(this.props.username, this.props.article_id, body)
      .then(comment => {
        this.setState(currentState => {
          return { comments: [comment, ...currentState.comments] };
        });
      });
  };
  handleDelete = comment_id => {
    api.deleteComment(comment_id).then(() => {
      const removedComment = this.state.comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      this.setState({ comments: removedComment });
    });
  };
  render() {
    const { comments, isLoading } = this.state;
    return (
      <div className="comment-list">
        {this.props.allowVotes && (
          <AddComment commentAdder={this.commentAdder} />
        )}
        {!isLoading &&
          comments.map(comment => {
            return (
              <CommentCard
                comment={comment}
                allowVotes={this.props.allowVotes}
                key={comment.comment_id}
                handleDelete={this.handleDelete}
              />
            );
          })}
      </div>
    );
  }
}

export default CommentList;
