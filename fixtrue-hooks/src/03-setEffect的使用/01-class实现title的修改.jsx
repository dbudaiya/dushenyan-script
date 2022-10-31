import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好李银河",
    };
  }

  componentDidMount() {
    //   修改title
    document.title = this.state.message;
    // 订阅事件
    console.log("订阅一些事件");

    // 进行数据请求
  }

  componentDidUpdate() {
    document.title = this.state.message;
  }

  componentWillUnmount() {
    console.log("取消一些事件");
  }
  btn() {
    console.log("buidaishu1");
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.setState({ message: "你好李知恩." })}>
          点击阿牛
        </button>
      </div>
    );
  }
}
