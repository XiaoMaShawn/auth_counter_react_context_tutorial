import React from "react";
import Counter from "../Counter";

export default function Infor(props) {
  return (
    <div>
      <p>
        <span>Email: {props.user.email}</span>
        <span>Name: {props.user.name}</span>
        <span>ID: {props.user.id}</span>
        <button onClick={props.logout}>Logout</button>
      </p>
      <Counter />
    </div>
  );
};