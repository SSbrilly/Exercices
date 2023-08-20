import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name } = this.props;
    return <p>Welcome, {name}!</p>;
  }
}

export default Welcome
