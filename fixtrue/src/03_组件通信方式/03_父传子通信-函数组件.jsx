import React, { Component } from "react";

// 1.函数式组件 :传入props ,不允许有this在内部使用.
function ChildApp(props) {
  return (
    <div>
      <h2>喜欢的歌手呀:</h2>
      <p>名字:{props.name}</p>
      <p>年龄:{props.age}</p>
    </div>
  );
}

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
