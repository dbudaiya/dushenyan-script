import React, { Component } from "react";

function Header() {
  return (
    <div>
      <h2>我是Header区域</h2>
    </div>
  );
}
function List() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
function Center() {
  return (
    <div>
      <h3>我是中部区域</h3>
      <List />
    </div>
  );
}
function Footer() {
  return (
    <div>
      <h2>我是footer区域</h2>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Center />
        <Footer />
      </div>
    );
  }
}
export default App;
