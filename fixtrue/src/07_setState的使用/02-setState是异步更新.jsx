import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好李银河",
    };
  }
  btn() {
    this.setState({
      message: "你好李知恩",
    });
    console.log(this.state.message); //异步更新
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
