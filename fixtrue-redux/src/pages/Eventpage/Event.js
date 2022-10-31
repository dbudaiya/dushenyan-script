import React, { Component, createRef, PureComponent } from "react";
import { EventEmitter } from "events";

// 创建对象
const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h3>---------------App事件总线Event传函数--------------</h3>
        <button onClick={(e) => this.eventBtn()}>点击Event阿牛</button>
      </div>
    );
  }
  eventBtn() {
    //发出事件总线监听的方法名
    eventBus.emit("btnclick", "李知恩", 12);
  }

  refBtn() {
    console.log("我是子组件方法,将在控制台中被声明周期创建期间进行打印");
  }
}

function Header() {
  const profileEl = createRef();
  return (
    <div>
      {/* 注:ref只能传一层的组件值 */}
      <ProfileHeader ref={profileEl} />
      <h3>--------------Ref关键字进行组件内部内容引用-----------</h3>
      <button onClick={btnClick}>点击Ref按钮</button>
    </div>
  );

  function btnClick() {
    profileEl.current.refBtn();
  }
}

export default class App extends PureComponent {
  componentDidMount() {
    eventBus.addListener("btnclick", this.btnclick);
  }
  componentWillUnmount() {
    eventBus.removeListener("btnclick", this.btnclick);
  }
  btnclick(name, age) {
    console.log("打印event传递过来的两个参数:" + name, age);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
