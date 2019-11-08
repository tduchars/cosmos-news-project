import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import AddComment from './AddComment';
import { Animated } from 'react-animated-css';

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    showComments: false
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
  revealComments = () => {
    this.setState(currentState => {
      return { showComments: !currentState.showComments };
    });
  };
  render() {
    const { comments, isLoading, showComments } = this.state;
    return (
      <div className="comment-list">
        {this.props.allowVotes && (
          <AddComment commentAdder={this.commentAdder} />
        )}
        {showComments ? (
          <h2 className="reveal-comments" onClick={this.revealComments}>
            &#708;
          </h2>
        ) : (
          <h2 className="reveal-comments" onClick={this.revealComments}>
            &#709;
          </h2>
        )}
        <div>
          {showComments && (
            <>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                animationInDuration={1200}
                animationOutDuration={800}
                isVisible={true}
              >
                {!isLoading &&
                  comments.map((comment, idx) => {
                    return (
                      <CommentCard
                        comment={comment}
                        allowVotes={this.props.allowVotes}
                        handleDelete={this.handleDelete}
                        username={this.props.username}
                        key={comment.comment_id}
                      />
                    );
                  })}
              </Animated>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default CommentList;
