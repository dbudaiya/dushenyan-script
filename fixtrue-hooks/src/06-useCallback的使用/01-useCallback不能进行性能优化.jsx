import React, { useState, useCallback } from "react";

/**
 * useCallback的目的是为了性能优化
 *    如何进行性能优化?
 *        usecallback会返回一个函数的mmemoizd(有记忆)的值
 *        在依赖不变的情况下,多次定义的使用,返回的值是相同的
 */

export default function App() {
  const [Age, setAge] = useState(21);
  const btn1 = () => {
    console.log("执行btn1函数");
    setAge(Age + 1);
  };

  const btn2 = useCallback(() => {
    console.log("执行btn2函数");
    setAge(Age + 1);
  }, [Age]);
  return (
    <div>
      <h1>{Age}</h1>
      <button onClick={btn1}>点击按钮</button>
      <button onClick={btn2}>点击按钮</button>
      
    </div>
  );
}
