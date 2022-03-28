import React, { useState } from "react";
import Counter from "../Counter";

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    email && props.login(email);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' name='email' value={email} placeholder='please enter your email' onChange={event => setEmail(event.target.value)} /><br />
        <label>Password</label>
        <input type='password' name='password' value={password} placeholder='password' onChange={event => setPassword(event.target.value)} />
        <button>Login</button>
      </form>
      <Counter />
    </div>
  );
};