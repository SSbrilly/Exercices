import React from "react";
import "./App.css";
import Login from "./Login";

function App() {
  const handleLogin = (userData) => {
    console.log("Logging in with:", userData);
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
