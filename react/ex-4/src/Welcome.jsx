import React, { Component } from "react";
import Age from "./Age";

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    const isAgeInRange = age > 18 && age < 65;
    const isNameJohn = name === "John";

    return (
      <div>
        <p>Welcome, {name || "Guest"}!</p>
        {isAgeInRange && isNameJohn && <Age age={age} />}{" "}
      </div>
    );
  }
}

export default Welcome;
