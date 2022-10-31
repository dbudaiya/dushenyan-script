import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好李银河",
      number: 1,
    };
  }
  btn() {
    this.setState({
      message: "你好李知恩",
    });

    // 不会覆盖number的数据: 等同于Object.assign({},{message:'你好李知恩'},this.state)
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
