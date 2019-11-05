import React, { Component } from 'react';
import * as api from '../utils/api';

class Login extends Component {
  state = {
    allUsers: [],
    username: '',
    isLoading: true
  };
  componentDidMount() {
    api.fetchAllUsers().then(allUsers => {
      this.setState({ allUsers, isLoading: false });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addUsername(this.state.username);
  };
  handleInput = e => {
    this.setState({ username: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="add-student-form">
          <label htmlFor="">
            <input
              onChange={this.handleInput}
              type="text"
              placeholder="username..."
              className="login-input"
              value={this.state.username}
            />
          </label>
          <button className="login-user">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
