import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}

export default ClickCounter;
