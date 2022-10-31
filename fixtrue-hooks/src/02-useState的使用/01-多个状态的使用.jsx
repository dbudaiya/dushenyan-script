import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("杜审言");
  const [movies] = useState([1, 2, 3, 4]);
  function btnClick() {
    setName("lizien");
  }
  return (
    <div>
      <h2>{name}</h2> <button onClick={btnClick}>点击按钮</button>
      <h2>{movies}</h2>
    </div>
  );
}
