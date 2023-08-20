import React, { Component } from "react";

class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  componentDidMount() {
    this.usernameInput.current.focus();
  }

  handleLogin = () => {
    const username = this.usernameInput.current.value;
    const password = this.passwordInput.current.value;
    const userData = { username, password };
    const { onLogin } = this.props;
    onLogin(userData);
  };

  handleReset = () => {
    this.usernameInput.current.value = "";
    this.passwordInput.current.value = "";
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.usernameInput} placeholder="Username" />
        <input
          type="password"
          ref={this.passwordInput}
          placeholder="Password"
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default UncontrolledLogin;
