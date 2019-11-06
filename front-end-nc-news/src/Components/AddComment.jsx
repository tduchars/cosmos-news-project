import React, { Component } from 'react';

class AddComment extends Component {
  state = {
    showMenu: false,
    commentInput: ''
  };

  showInputs = () => {
    this.setState(currentState => {
      return {
        showMenu: !currentState.showMenu
      };
    });
  };
  handleInputs = e => {
    this.setState({ commentInput: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.commentAdder(this.state.commentInput);
    this.setState({ showMenu: false, commentInput: '' });

    this.setState({
      name: '',
      startingCohort: ''
    });
  };
  render() {
    return (
      <>
        <div>
          <button className="dropdown-input" onClick={this.showInputs}>
            Add Comment
          </button>
          {this.state.showMenu && (
            <div className="dropdown-content">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                  <input
                    type="text"
                    placeholder="be nice..."
                    onChange={this.handleInputs}
                    value={this.state.commentInput}
                  />
                </label>
                <label htmlFor="">
                  <button>Post</button>
                </label>
              </form>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default AddComment;
