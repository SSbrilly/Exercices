import React, { useState, useEffect } from "react";

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

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
