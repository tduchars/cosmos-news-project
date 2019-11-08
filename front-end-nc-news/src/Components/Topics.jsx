import React, { Component } from 'react';
import '../App.css';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import { Animated } from 'react-animated-css';

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
    const slideFadeArr = [0, 1200, 2500];
    return (
      <div className="topics-nav">
        {!isLoading &&
          topics.map((topic, idx) => {
            return (
              <Link to={`/topic/${topic.slug}`} key={idx}>
                <Animated
                  animationIn="fadeIn"
                  animationInDuration={800 + slideFadeArr[idx]}
                  isVisible={true}
                >
                  <h5 className="topic-selector">{topic.slug}</h5>
                </Animated>
              </Link>
            );
          })}
      </div>
    );
  }
}

export default Topics;
