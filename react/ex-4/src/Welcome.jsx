import React, { Component } from "react";
import Age from "./Age";

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Welcome, {name || "Guest"}!</p>
        {age && <Age age={age} />}
      </div>
    );
  }
}

export default Welcome;
