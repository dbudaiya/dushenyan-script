import React, { memo, useState, useCallback } from "react";

/**
 * useCallback的目的是为了性能优化
 *    如何进行性能优化?
 *        usecallback会返回一个函数的mmemoizd(有记忆)的值
 *        在依赖不变的情况下,多次定义的使用,返回的值是相同的
 *    
 *  useCallback在什么场景下使用?
 *    在将一个组件中的函数,传递给子元素进行回调作用时使用useCallback对函数进行处理
 */
const SYButton = memo((props) => {
  console.log("组件被重写" + `${props.title}`);
  return <button onClick={props.increment}>点击阿牛</button>;
});

export default function App() {
  const [Age, setAge] = useState(21);
  const [show, setShow] = useState(false);
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
      <SYButton title="btn1" increment={btn1} />
      <SYButton title="btn2" increment={btn2} />

      <button
        onClick={(e) => {
          setShow(!show);
        }}
      >
        按钮点击
      </button>
    </div>
  );
}
