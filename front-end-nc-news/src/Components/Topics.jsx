import React, { Component } from 'react';
import '../App.css';
import * as api from '../utils/api';

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  componentDidMount() {
    api.fetchAllTopics().then(({ data: { topics } }) => {
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
    const { isLoading, topics } = this.state;
    return (
      <div className="topics-nav">
        {!isLoading &&
          topics.map((topic, idx) => {
            return (
              <>
                <button key={idx}>{topic.slug}</button>
              </>
            );
          })}
      </div>
    );
  }
}

export default Topics;
