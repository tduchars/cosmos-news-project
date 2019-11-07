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
        <div>
          <button className="dropdown-form-button" onClick={this.showInputs}>
            add comment
          </button>
          {this.state.showMenu && (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                  <input
                    className="add-comment-input"
                    type="text"
                    placeholder="be nice..."
                    onChange={this.handleInputs}
                    value={this.state.commentInput}
                  />
                </label>
                <label htmlFor="">
                  <button className="add-comment-button">post</button>
                </label>
              </form>
            </div>
          )}
          {this.state.triggerPrompt && (
            <h5 className="prompt-message">No empty voids allowed...</h5>
          )}
        </div>
      </>
    );
  }
}

export default AddComment;
