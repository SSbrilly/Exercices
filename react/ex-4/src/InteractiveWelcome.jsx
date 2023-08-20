import React, { Component } from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder="Enter your name"
        />
        <Welcome name={this.state.inputValue} />
      </div>
    );
  }
}

export default InteractiveWelcome;
