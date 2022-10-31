import React, { useEffect, useState } from "react";

export default function App() {
  const [counte, setCounte] = useState(1);
  useEffect(() => {
    console.log("修改DOM");
    return () => {
      console.log("修改完成");
    };
  }, [counte]);

  // 空数组谁都不依赖,不会出现数据监听操作,可以组合进行性能优化
  useEffect(() => {
    console.log("订阅事件");
  }, []);
  useEffect(() => {
    console.log("数据请求");
  }, []);
  return (
    <div>
      <h2>{counte}</h2>
      <button onClick={(e) => setCounte(counte + 1)}>点击阿牛</button>
    </div>
  );
}
