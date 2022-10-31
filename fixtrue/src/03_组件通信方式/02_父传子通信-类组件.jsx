import React, { Component } from "react";

// 1.子组件
class ChildApp extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>喜欢的歌手:</h2>
        <p>名字:{this.props.name}</p>
        <p>年龄:{this.props.age}</p>
      </div>
    );
  }
}

// 2.父组件
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "李智恩",
      age: 28,
    };
  }
  render() {
    const { name, age } = this.state;
    return (
      <div>
        <ChildApp name={name} age={age} />
      </div>
    );
  }
}
