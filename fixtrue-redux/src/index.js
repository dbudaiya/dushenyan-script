import React from "react";
import ReactDOM from "react-dom";
// import App from './pages/App'

// 1.普通使用
// ReactDOM.render(<App />, document.getElementById("root"));

//2.react-redux使用
// import App2 from "./pages/App2";
// import { Provider } from "react-redux";
// import store from "./store/index";
// ReactDOM.render(
//   <Provider store={store}>
//     <App2 />
//   </Provider>,
//   document.getElementById("root")
// );

// 3.中间件使用
// import App3 from "./pages/App3";
// import { Provider } from "react-redux";
// import store from "./store/index";
// ReactDOM.render(
//   <Provider store={store}>
//     <App3 />
//   </Provider>,
//   document.getElementById("root")
// );

// 4.简单代码引出中间件异步处理的前身
// import App4 from "./pages/App4";
// import { Provider } from "react-redux";
// import store from "./store/index";
// ReactDOM.render(
//   <Provider store={store}>
//     <App4 />
//   </Provider>,
//   document.getElementById("root")
// );

// 4.函数组件处理异步状态数据
// import App5 from "./pages/App5";
// import { Provider } from "react-redux";
// import store from "./store/index";
// ReactDOM.render(
//   <Provider store={store}>
//     <App5 />
//   </Provider>,
//   document.getElementById("root")
// );

// 6.不使用connect,使用react-redux提供的hooks函数进行数据操作
import App6 from "./pages/App6";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <Provider store={store}>
    <App6 />
  </Provider>,
  document.getElementById("root")
);

// 7.使用context进行对组件状态进行共享
// import Subpage from "./pages/Subpage.js";
// import { Provider } from "react-redux";
// import store from "./store/index";
// ReactDOM.render(
//   <Provider store={store}>
//     <Subpage />
//   </Provider>,
//   document.getElementById("root")
// );

// 8.使用事件总线去获取组建与组件之间的事件传递
// import App from "./pages/Eventpage/Event";
// ReactDOM.render(<App />, document.getElementById("root"));
