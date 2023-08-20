import React, { useState } from "react";
import "./App.css";
import ClickCounter from "./ClickCounter";

function App() {
  const handleCounterChange = (newCount) => {
    console.log("Counter value changed:", newCount);
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App;
