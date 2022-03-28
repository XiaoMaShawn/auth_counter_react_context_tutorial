import React from 'react';
import useCounter from './hooks/useCounter';

export default function Counter() {
  const { counter, increment, decrement, clear } = useCounter();
  return (
    <div>
      Counter: {counter}
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>
  )
};