import React, { Component } from 'react';

class AddComment extends Component {
  state = {
    showMenu: false,
    commentInput: '',
    triggerPrompt: false
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
    if (this.state.commentInput.length === 0) {
      this.setState({ triggerPrompt: true });
    } else {
      this.props.commentAdder(this.state.commentInput);
      this.setState({
        showMenu: false,
        commentInput: '',
        triggerPrompt: false
      });
    }

    this.setState({
      name: '',
      startingCohort: ''
    });
  };
  render() {
    return (
      <>
        <button className="dropdown-form-button" onClick={this.showInputs}>
          add comment
        </button>
        {this.state.showMenu && (
          <div>
            <form
              onSubmit={this.handleSubmit}
              className="add-comment-container"
            >
              <label htmlFor="">
                <textarea
                  className="add-comment-input"
                  rows="4"
                  cols="50"
                  placeholder="be nice..."
                  onChange={this.handleInputs}
                  value={this.state.commentInput}
                />
              </label>
              <label htmlFor="">
                <button className="add-comment-button">&#707;</button>
              </label>
            </form>
          </div>
        )}
        {this.state.triggerPrompt && (
          <h5 className="prompt-message">no voids allowed...</h5>
        )}
      </>
    );
  }
}

export default AddComment;
