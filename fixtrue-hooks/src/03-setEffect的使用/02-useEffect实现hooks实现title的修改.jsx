import React, { useEffect, useState } from "react";

export default function App() {
  const [title, setTitle] = useState("你好李银河");
  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={(e) => setTitle("你好李知恩")}>点击阿牛</button>
    </div>
  );
}
