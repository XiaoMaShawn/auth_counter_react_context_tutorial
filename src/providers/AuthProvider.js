import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email) => {
    setAuth(true);
    const id = '4321-1234-2231';
    setUser({ email, id, name: 'Test User' });
  }

  const logout = () => {
    setAuth(false);
    setUser(null)
  }
  //export the variable and functions that will be used in app.js
  const providerData = { auth, user, login, logout }

  return (
    //what you want to share need to be in value key
    <authContext.Provider value={providerData}>
      {props.children}
    </authContext.Provider>
  );
};