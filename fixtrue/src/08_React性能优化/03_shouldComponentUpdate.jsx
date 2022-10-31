import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }

  render() {
    console.log("App render函数被调用");
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.changeText()}>改变文本</button>
      </div>
    );
  }

  //根据需求来改变,修改counter会更新组件,但改变文本时组件不会复用,如果需要的话,在下面添加代码逻辑
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }

    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: "你好啊,李银河",
    });
  }
}
