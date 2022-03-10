import React, { useState } from 'react';

export default function Counter() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h1>this is a counter</h1>
      <div className="flex mx-auto max-w-sm">
        <span>{count}</span>
        <div>
          <button type="button" onClick={() => setCounter(count - 1)}>
            <span>
              -
            </span>
          </button>
          <button type="button" onClick={() => setCounter(count + 1)}>
            <span>
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
