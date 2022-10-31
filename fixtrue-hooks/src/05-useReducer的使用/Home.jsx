import React, { useReducer } from "react";
import reducer from "./reducer";

/**
 * useReducer的第一反应是redux1的替代品其实并不是
 *    useReducer仅仅是useState的一种解决方案
 *        在某些场景下,如果state的逻辑场景比较复杂时,通过useState进行拆分
 *        或者这次修改的state需要依赖之前的state时也可以使用
 * 
 * 注:处理逻辑是一样的,能共用方法早下一个组件使用
 */ 

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { counte: 0 });
  return (
    <div>
      <h2>Home当前计数:{state.counte}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>加1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>减1</button>
    </div>
  );
}
