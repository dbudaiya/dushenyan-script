import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }
  btn() {
    //   1.下面数据不合并
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    // 2.合并数据相加:解读源码
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={(e) => this.btn()}>切换文本</button>
      </div>
    );
  }
}
