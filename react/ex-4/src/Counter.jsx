import React, { useState, useEffect } from "react";

function Counter({ initialCount, interval, increment }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + increment);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, increment]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
