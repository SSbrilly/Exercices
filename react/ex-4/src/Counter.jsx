import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends Component {
  state = {
    count: this.props.initialValue || 0,
  };

  componentDidMount() {
    this.interval = setInterval(
      this.incrementCount,
      this.props.incrementInterval || 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + (this.props.incrementAmount || 1),
    }));
  };

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
