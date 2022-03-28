import React, { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  //functions to change the counter
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const clear = () => {
    setCounter(0)
  }

  //export the variable and functions that will be used in app.js
  return { counter, increment, decrement, clear }
};