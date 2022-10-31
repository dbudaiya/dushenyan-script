import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.changeTexts}>{this.props.title}</button>
      </div>
    );
  }
}


// 父级组件 +-
export default class App extends PureComponent {
  // 父组件
  constructor(props) {
    super(props);

    this.state = {
      title: "我是阿牛",
      name: "lizien",
    };
  }
  render() {
    return (
      <div>
        <Header
          changeTexts={(e) => this.changeText()}
          title={this.state.title}
        />
      </div>
    );
  }

  changeText() {
    this.setState({
      title: "我就是你要改变的title文本",
    });
  }
}
