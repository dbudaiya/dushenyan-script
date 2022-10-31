import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好李银河",
    };
  }
  componentDidUpdate() {
    console.log(this.state.message); //1.
  }

  //   2.独立于之外不用在监听事件onClick

  //   componentDidMount() {
  //     document.getElementById("btn").addEventListener("click", () => {
  //       this.setState({
  //         message: "你好李知恩",
  //       });
  //       console.log(this.state.message); //2.
  //     });
  //   }

  btn() {
    //1.定时器为0,立即执行
    setTimeout(() => {
      this.setState(
        {
          message: "你好李知恩",
        },
        () => {
          console.log(this.state.message);
        }
      );
    }, 0);
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={(e) => this.btn()} id="btn">
          切换文本
        </button>
      </div>
    );
  }
}
