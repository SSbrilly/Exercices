import React from "react";
import "./App.css";
import FilteredList from "./FilteredList";

function App() {
  const items = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 18 },
  ];

  return (
    <div className="App">
      <h1>FilteredList App</h1>
      <FilteredList items={items} />
    </div>
  );
}

export default App;
