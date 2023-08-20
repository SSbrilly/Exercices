import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { onLogin } = this.props;
    onLogin(this.state);
  };

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const { username, password } = this.state;
    const isButtonDisabled = username === "" || password === "";

    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <button disabled={isButtonDisabled} onClick={this.handleLogin}>
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Login;
