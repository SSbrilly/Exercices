import React from "react";
import "./App.css";
import UncontrolledLogin from "./UncontrolledLogin";

function App() {
  const handleLogin = (userData) => {
    console.log("Logging in with:", userData);
  };

  return (
    <div className="App">
      <UncontrolledLogin onLogin={handleLogin} />
    </div>
  );
}

export default App;
