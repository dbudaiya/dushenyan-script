import React, { Component, PureComponent } from "react";

function App(props) {
  return (
    <div>
      <h2>函数组件写法接收数据:{props.name}</h2>
    </div>
  );
}

// 外部得是一个函数组件传参
function enComponents(WrapperComponent) {
  class NewComponent extends PureComponent {
    render() {
      <div>
        <WrapperComponent {...this.props} />
      </div>;
    }
  }
  NewComponent.displayName = "lizien";
  return NewComponent;
}

const huenuComponent = enComponents(App);

export default huenuComponent;

// function enComponent(WrapperComponent) {
//   function NewComponent(props) {
//     return <WrapperComponent {...props} />;
//   }

//   NewComponent.displayName = "lizien";
//   return NewComponent;
// }
