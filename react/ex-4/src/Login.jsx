import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

    const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <label>
          Remember me:
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
