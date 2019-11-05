import React from 'react';

const CommentCard = props => {
  return (
    <>
      <div className="comment-card">
        <p>{props.comment.body}</p>
        <h5>{props.comment.author}</h5>
      </div>
    </>
  );
};

export default CommentCard;
