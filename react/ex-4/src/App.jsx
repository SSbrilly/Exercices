import React from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoList
        render={(items, handleRemoveItem) => (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;
