import React from "react";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="John" age={30} />
      <Welcome name="Alice" age={15} />
    </div>
  );
}

export default App;
