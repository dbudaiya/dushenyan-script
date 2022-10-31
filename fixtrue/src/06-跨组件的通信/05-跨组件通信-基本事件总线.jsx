import React, { Component, PureComponent } from 'react'
import {EventEmitter} from 'events'

// 创建对象
const eventBus = new EventEmitter();
class ProfileHeader extends Component{
  render(){
    return(
      <div>
        <button onClick={e=>this.btn()}>点击阿牛</button>
      </div>
    )
  }
  btn(){
    eventBus.emit("btnclick","李知恩",12)
  }
}

function Header(props){
  return (
    <div>
      <ProfileHeader />
      <p>Header数据</p>
    </div>
  )
}

export default class App extends PureComponent {
  componentDidMount(){
    eventBus.addListener("btnclick",this.btnclick)
  }
  btnclick(name,age){
    console.log(name,age);
  }
  componentWillUnmount(){
    eventBus.removeListener("btnclick",this.btnclick)
  }
  render() {
    return (
      <div>
        <Header />
        <p>App数据</p>
      </div>
    )
  }
}
