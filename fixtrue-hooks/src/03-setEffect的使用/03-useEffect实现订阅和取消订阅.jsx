// import React, { useEffect } from "react";

// export default function App() {
//   useEffect(() => {
//     console.log("订阅一些事件");
//     return () => {
//       console.log("取消一些事件");
//     };
//   }, []);
//   return <div></div>;
// }

// /**
//  * 移除组件:
//  *  - {show&&<App />}
//  *  - <button onClick={e=>setState(show:!show)}>移除组件阿牛</button>
//  */

import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("发送网络请求");
    return () => {
      console.log("发送完成");
    };
  }, []);
  return <div>Axios</div>;
}
