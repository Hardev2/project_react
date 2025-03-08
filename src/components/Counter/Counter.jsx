import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  const buttonStyle = 'px-3 py-1 bg-blue-400 text-white rounded w-[100px]';
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[4rem]'>{count}</h1>
        <div className='flex items-center justify-center gap-3 mt-3'>
          <button onClick={increment} className={buttonStyle}>
            Increment
          </button>
          <button onClick={reset} className={buttonStyle}>
            Reset
          </button>
          <button onClick={decrement} className={buttonStyle}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
