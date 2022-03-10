import React, { useState } from 'react';

export default function Counter() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>this is a counter</h1>
      <span>{count}</span>
      <button type="button" onClick={() => setCounter(count - 1)}>Decrement</button>
      <button type="button" onClick={() => setCounter(count + 1)}>Increment</button>
    </div>
  );
}
