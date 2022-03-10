import React, { useState } from 'react';

export default function Counter() {
  const [count, setCounter] = useState(0);
  return (
    <div className="rounded-xl shadow-lg py-10 bg-white max-w-sm my-10 mx-auto">
      <h1>this is a counter</h1>
      <div className="flex-col mx-auto max-w-sm">
        <span className="text-2xl">{count}</span>
        <div>
          <button className="px-3 text-2xl text-rose-500" type="button" onClick={() => setCounter(count - 1)}>
            <span>
              -
            </span>
          </button>
          <button className="px-3 text-2xl text-lime-500" type="button" onClick={() => setCounter(count + 1)}>
            <span>
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
