import React from "react";
import useFormInput from "./useFormInput";

function FormComponent() {
  const usernameInput = useFormInput("");
  const passwordInput = useFormInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", usernameInput.value);
    console.log("Password:", passwordInput.value);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" {...usernameInput} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...passwordInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
