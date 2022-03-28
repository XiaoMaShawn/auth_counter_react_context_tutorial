import { createContext, useState } from "react";

export const counterContext = createContext();

export default function CounterProvider(props) {
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
  const providerData = { counter, increment, decrement, clear }

  return (
    //what you want to share need to be in value key
    <counterContext.Provider value={providerData}>
      {props.children}
    </counterContext.Provider>
  );
};