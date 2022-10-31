import React, { Component } from "react";

/**
 * 1.类组件
 *  -有状态去维护
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "what`s you names?",
    };
  }

  render() {
    /**
     * react返回值
     *  -
     */

    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

/**
 * 2.函数式组件
 *  -没有this对象
 *  -没有内部的状态
 */

// function App() {
//   return (
//     <div>
//       <h2>函数式组件</h2>
//     </div>
//   );
// }

export default App;
