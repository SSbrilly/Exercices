import React from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Counter initialCount={0} interval={1000} increment={1} />
    </div>
  );
}

export default App;
