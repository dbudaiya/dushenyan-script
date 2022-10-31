import React, { Component } from "react";

export default class App extends Component {
    // 1.基本生命周期
  constructor() {
    super();
    console.log("-------------constructor函数-----------");

    this.state = {
      movies: ["ลลิษา มโนบาล", "Lalisa Manoban", "라리사 마노반"],
    };
  }

  render() {
    console.log("--------------render函数----------------");

    let movie = [];
    for (let i of this.state.movies) {
      movie.push(<li>{i}</li>);
    }

    return (
      <div>
        <ul>{movie}</ul>
        <button onClick={this.btnclick.bind(this)}>改变文本</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("-------------componentDidMount函数----------");
  }

  //   2.点击调用bntclick函数更新数据,对componentDidUpdate函数调用
  btnclick() {}

  //  3.移除挂载
  componentDidUpdate() {
    console.log("----------componentDidUpdate函数-------------");
  }

  // 3.
  componentWillUnmount() {
    console.log("----------componentWillUnmount函数---------");
  }
}
