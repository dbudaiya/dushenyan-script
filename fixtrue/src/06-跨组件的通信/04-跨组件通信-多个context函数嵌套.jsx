import React, { Component } from "react";
import { render } from "react-dom";

const UserContext = React.createContext({
  name: "lizien",
  age: 29,
});
const ThemeContext = React.createContext({
  color:"red"
})
// 出现Hook是函数组件使用的次数会越来越多
function ProfileHeader() {
  return (
    //Consumber是在函数中使用的
    <UserContext.Consumer>
      {(value) => {
        return (
         <ThemeContext.Consumer>
           {
             theme=>{
               return(
                 <div>
                   <h2 style={{color:theme.color}}>姓名:{value.name}</h2>
                   <h2>年龄:{value.age}</h2>
                 </div>
               )
             }
           }
         </ThemeContext.Consumer>
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
        <UserContext.Provider value={{name:"李智恩",age:11}}>
          <ThemeContext.Provider value={{color:'orange'}}>
          <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
