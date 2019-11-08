import React from 'react';
import '../App.css';
import { Link } from '@reach/router';
import { Animated } from 'react-animated-css';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="home-button">
          <strong>home</strong>
        </Link>
      </nav>
      <header className="App-header">
        <Animated
          animationIn="fadeIn"
          animationInDuration={800}
          isVisible={true}
        >
          <h1>
            <span className="tags">&lt;</span>cosmos
            <span className="tags">/&gt;</span>
          </h1>
        </Animated>
      </header>
    </div>
  );
};

export default Header;
