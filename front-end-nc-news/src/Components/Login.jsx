import React, { Component } from 'react';
import * as api from '../utils/api';

class Login extends Component {
  state = {
    allUsers: [],
    username: 'jessjelly',
    avatarUrl: '',
    isLoading: true,
    showLogin: false,
    showAvatar: false
  };
  componentDidMount() {
    api.fetchAllUsers().then(allUsers => {
      this.setState({ allUsers, isLoading: false });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const avatar = this.state.allUsers.filter(user => {
      return user.username === this.state.username;
    });
    this.props.addUsername(this.state.username, avatar[0].avatar_url);
  };
  handleInput = e => {
    this.setState({ username: e.target.value });
  };
  render() {
    return (
      <>
        <div className="login-form">
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
            <button className="login-user">login</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
