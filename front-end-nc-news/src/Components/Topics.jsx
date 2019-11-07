import React, { Component } from 'react';
import '../App.css';
import { Link } from '@reach/router';
import * as api from '../utils/api';

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    sortOrder: true
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
        <Link to={`/`}>
          <h5 className="topic-selector">all</h5>
        </Link>
        {!isLoading &&
          topics.map((topic, idx) => {
            return (
              <Link to={`/topic/${topic.slug}`} key={idx}>
                <h5 className="topic-selector">{topic.slug}</h5>
              </Link>
            );
          })}
      </div>
    );
  }
}

export default Topics;
