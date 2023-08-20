import React, { Component } from "react";

class ClickCounter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Click Me</button>
      </div>
    );
  }
}

export default ClickCounter;
