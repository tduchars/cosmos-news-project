import React, { Component } from 'react';
import { Link } from '@reach/router';

class Footer extends Component {
  state = {
    userLogged: localStorage.getItem('username')
  };
  render() {
    return (
      <div className="footer">
        <Link to="/" className="github-links">
          <h4>other projects</h4>
        </Link>
        {this.state.userLogged && (
          <button
            className="logout"
            onClick={e => {
              localStorage.clear();
              window.location.reload().scrollTop(0, 0);
            }}
          >
            logout
          </button>
        )}
      </div>
    );
  }
}

export default Footer;
