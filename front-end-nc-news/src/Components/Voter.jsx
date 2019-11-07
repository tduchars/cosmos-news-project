import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVote: 0
  };
  incVote = (article_id, value, prefix) => {
    api.incrementArticleVote(article_id, value, prefix);
    this.setState(currentState => {
      return {
        optimisticVote: currentState.optimisticVote + value
      };
    });
  };
  render() {
    const { votes, article_id, prefix, allowVotes } = this.props;
    return (
      <>
        {allowVotes && (
          <div className="interact">
            <button
              className="up-vote-button"
              onClick={e => {
                this.incVote(article_id, 1, prefix);
              }}
              disabled={this.state.optimisticVote > 0}
            >
              &uArr;
            </button>
            <h5 className="votes-counter">
              {votes + this.state.optimisticVote}
            </h5>
            <button
              className="down-vote-button"
              onClick={e => {
                this.incVote(article_id, -1, prefix);
              }}
              disabled={this.state.optimisticVote < 0}
            >
              &dArr;
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Voter;
