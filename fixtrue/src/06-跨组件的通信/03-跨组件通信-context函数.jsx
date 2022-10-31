import React, { Component } from "react";
import { render } from "react-dom";

const UserContext = React.createContext({
  name: "lizien",
  age: 29,
});

function ProfileHeader() {
  return (
    //   Consumber是在函数组件中特有的,后续学习hooks在来复习
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <div>姓名:{value.name}</div>
            <div>年龄:{value.age}</div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile组件</h2>
      <ProfileHeader />
    </div>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}


//注: 这里貌似不用使用contextType属性,因为函数组件根本就没有属性值