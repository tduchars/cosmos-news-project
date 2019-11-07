import React from 'react';
import '../App.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="home-button">
          <strong>home</strong>
        </Link>
      </nav>
      <header className="App-header">
        <h1>
          <span className="tags">&lt;</span>NC News
          <span className="tags">/&gt;</span>
        </h1>
      </header>
    </div>
  );
};

export default Header;
