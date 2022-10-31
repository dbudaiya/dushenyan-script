import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好李银河",
    };
  }
  btn() {
    //查看源代码可知setState方法有两个参数(最新的state,回调函数)
    this.setState(
      {
        message: "你好李知恩",
      },
      () => {
        console.log(this.state.message);
      }
    );
    // console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.btn()}>切换文本</button>
      </div>
    );
  }
}
