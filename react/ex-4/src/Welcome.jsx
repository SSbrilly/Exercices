import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name || "Guest"}!</p>
        {age && <p>Your age is {age}</p>}
      </div>
    );
  }
}

export default Welcome;
