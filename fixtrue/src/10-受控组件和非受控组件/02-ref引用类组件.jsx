import React, { createRef, PureComponent } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.btnclick()}>点击子阿牛</button>
      </div>
    );
  }

  btnclick() {
    // return "点击阿牛";
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleEl = createRef();
  }
  render() {
    return (
      <div>
        <Counter ref={this.titleEl} />
        <button onClick={(e) => this.Elchange()}>点击阿牛</button>
      </div>
    );
  }

  Elchange() {
    // console.log(this.titleEl.current.btnclick);
    this.titleEl.current.btnclick();
  }
}
