import React, { Component, PureComponent, useState } from "react";
import "./style.css";

//子组件:函数组件
function TabbarControl(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <ul className="tabbar-control">
        {props.data.map((item, index) => {
          return (
            <li
              className="tabbar-list "
              key={index}
              onClick={(e) => props.tabclick(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
// 父组件
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ["新款", "精选", "流行"],
      currentTitle: "新款",
    };
    this.changeTitle = this.changeTitle.bind(this);
  }
  componentDidUpdate() {
    // 更新组件得到哪一个被点击的index值
    // console.log(this.state.currentIndex);
    console.log(this.state.currentTitle);
  }
  render() {
    const { data, currentTitle } = this.state;
    return (
      <div>
        <TabbarControl data={data} tabclick={this.changeTitle} />
        <h2>{currentTitle}</h2>
      </div>
    );
  }

  changeTitle(index) {
    this.setState({
      currentTitle: this.state.data[index],
    });
  }
}
