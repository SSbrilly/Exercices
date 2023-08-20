import React, { Component } from "react";

class UncontrolledLogin extends Component {
  handleLogin = () => {
    const username = this.usernameInput.value;
    const password = this.passwordInput.value;
    const userData = { username, password };
    const { onLogin } = this.props;
    onLogin(userData);
  };

  handleReset = () => {
    this.usernameInput.value = "";
    this.passwordInput.value = "";
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => (this.usernameInput = input)}
          placeholder="Username"
        />
        <input
          type="password"
          ref={(input) => (this.passwordInput = input)}
          placeholder="Password"
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default UncontrolledLogin;
