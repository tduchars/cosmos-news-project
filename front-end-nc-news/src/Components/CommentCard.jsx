import React from 'react';
import Voter from './Voter';

const CommentCard = props => {
  const { votes, comment_id } = props.comment;
  return (
    <>
      <div className="comment-card">
        <p>{props.comment.body}</p>
        <h5>{props.comment.author}</h5>
        <Voter
          prefix={'comments'}
          votes={votes}
          article_id={comment_id}
          allowVotes={props.allowVotes}
        />
        {props.allowVotes && props.username === props.comment.author && (
          <h4
            className="delete-comment-card"
            onClick={e => {
              props.handleDelete(comment_id);
            }}
          >
            &#10006;
          </h4>
        )}
      </div>
      <br />
      <hr className="comment-divider" />
      <br />
    </>
  );
};

export default CommentCard;
