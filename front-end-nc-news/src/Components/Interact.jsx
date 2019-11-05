import React from 'react';

const Interact = props => {
  const { votes } = props;
  return (
    <>
      <div className="interact">
        <h5 className="vote-button">upVote: {votes}</h5>
        <h5 className="comment-button">Comment</h5>
      </div>
    </>
  );
};

export default Interact;
