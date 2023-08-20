import React from "react";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name={<strong>Simone</strong>} age={30} />
    </div>
  );
}

export default App;
