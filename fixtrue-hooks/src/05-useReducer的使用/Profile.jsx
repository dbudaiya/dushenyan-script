import React, { useReducer } from "react";
import reducer from "./reducer";

export default function Profile() {
  const [state, dispatch] = useReducer(reducer, { counte: 0 });
  return (
    <div>
      <h2>Profile当前计数:{state.counte}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>加1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>减1</button>
    </div>
  );
}
