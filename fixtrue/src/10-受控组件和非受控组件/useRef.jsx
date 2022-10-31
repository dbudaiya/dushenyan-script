import React, { Component, useRef } from "react";

class Person extends Component {
  render() {
    return <h1>xaiobudai</h1>;
  }
}
export default function App() {
  const inputEl = useRef();
  const titleEl = useRef();
  const personEl = useRef();
  const onButtonClick = () => {
    titleEl.current.innerHTML = "你好哇";
    inputEl.current.focus();
    console.log(inputEl.current);

    // 使用ref打印组件的详细详细
    console.log(personEl.current);
  };
  return (
    <div>
      <h1 ref={titleEl}>不带书</h1>
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}>点击阿牛</button>

      <Person ref={personEl} />
    </div>
  );
}
