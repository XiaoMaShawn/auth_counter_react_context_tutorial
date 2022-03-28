import React, { useContext } from 'react';
//import what content you will use as the context
import { counterContext } from './providers/CounterProvider';
import { authContext } from './providers/AuthProvider';

export default function Counter() {
  //call useContext method from React to use the content you've imported above
  const { counter, increment, decrement, clear } = useContext(counterContext);
  const { user } = useContext(authContext);


  return (
    <>

      <div>
        Counter: {counter}
        <button onClick={decrement}>-</button>
        <button onClick={clear}>0</button>
        <button onClick={increment}>+</button>
        {user && user.name}
      </div>
    </>
  )
};