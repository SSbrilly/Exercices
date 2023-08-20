import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Welcome name="John" age={30} />
      <Welcome name="Alice" age={15} />
      <Counter />
    </div>
  );
}

export default App;
