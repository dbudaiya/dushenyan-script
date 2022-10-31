import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// 路由组件基本使用案例
// import App from "./App1";

// 路由组件基本使用的基础上添加一点新花样,r
// import App from './App2'

// 重定向和动态传参
// import App from './App3'

// 根据react组件通过的props参去操作路由地址,删除一些不必要组件,this.props只能获取子理由的路由信息
import App from './App4'

// 上述组件共用的渲染函数
// ReactDOM.render(<App />, document.getElementById("root"));

// 2.最顶层获取路由对象
// import App from "./App5";
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// 3.react-router-config集中式管理路由
// import App from "./App5";

// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById("root")
// );
