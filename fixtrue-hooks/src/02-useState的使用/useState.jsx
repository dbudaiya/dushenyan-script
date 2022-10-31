import React, { Component, useState, useContext } from "react";

/**
 * class类组件操作状态数据
 */

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好李银河",
    };
  }
  changeText() {
    this.setState({
      message: "你好李知恩",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={(e) => this.changeText()}>点击阿牛</button>
      </>
    );
  }
}

/**
 * 函数组件操作状态数据
 */
function ReactHooksUseState() {
  const [count, setCount] = useState(1);

  function handleBtnclick() {
    // setCount(count + 10);
    // setCount(count + 10);

    /* 在上一次的基础下进行叠加叠加 */
    setCount((prevCount) => prevCount + 10);
    setCount((prevCount) => prevCount + 10);
    setCount((prevCount) => prevCount + 10);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={(e) => setCount(count + 1)}>加1</button>

      {/* 这的大括号是不用去加的,加了会报错 */}
      <button onClick={handleBtnclick}>+10</button>

      <button onClick={(e) => setCount((prevCount) => prevCount + 1)}>
        prevCount的使用
      </button>
    </div>
  );
}

/**
 * hook :useState
 *  本身是一个函数,来自react包
 *  参数和返回值:
 *      1.参数: 作用是给创建出来的状态一个初始化值
 *      2.返回值: 数组
 *          -元素1: 当前state的值
 *          -元素2: 设置新值时使用的函数
 */

function KnowHooks() {
  console.log(useContext);
  const arr = useState("你好李银河");
  console.log(arr[0]);
  console.log(arr[1]);
  return <div>App组件</div>;
}
