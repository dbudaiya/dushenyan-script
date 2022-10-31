import React, { Component } from "react";
import Profile from "./Profile";
import ProfileHeader from "./Profileheader";
// 1.创建context对象  ,后面传入默认值
const UserContext = React.createContext({
  name: "lizien",
  age: 29,
});

// 2.将创建的对象userContext给到属性contextType上,后续在ProfileHeader上就能使用context上的默认值或者是value值
ProfileHeader.contextType = UserContext;

export default class App extends Component {
  render() {
    return (
      <div>
        <h4>Profile组件</h4>
        {/* 3. */}
        <UserContext.Provider value={{ name: "dushenyan", age: 10 }}>
          {/* 3.1 */}
          <Profile />
        </UserContext.Provider>
        {/* 3.2 */}
        <Profile name={"杜审言"} age={28} />
      </div>
    );
  }
}
