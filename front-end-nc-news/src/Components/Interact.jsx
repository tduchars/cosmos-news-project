import React, { Component } from 'react';

class Interact extends Component {
  state = {};
  render() {
    const { votes } = this.props;
    return (
      <>
        <div className="interact">
          <h5 className="vote-button">upVote: {votes}</h5>
          <h5 className="comment-button">Comment</h5>
        </div>
      </>
    );
  }
}

export default Interact;
