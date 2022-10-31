import React, { Component } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

import LinkDate from "./common/later-data.js";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Introduce from "./pages/Introduce/index";
const style = {
  color: "red",
};

export default class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "99874532",
    };
  }

  btn(){
      console.log(this.props.location);
  }

  render() {
    return (
      <div>
        <HashRouter>
          <NavLink to={LinkDate[0].link} activeStyle={style}>
            {LinkDate[0].title} |
          </NavLink>
          <NavLink
            to={LinkDate[1].link + `/${this.state.id}`}
            activeStyle={style}
          >
            {LinkDate[1].title}  |
          </NavLink>
          <NavLink to={LinkDate[2].link} activeStyle={style}>
            {LinkDate[2].title} |
          </NavLink>
          <button onClick={e=>{this.btn()}}>切换到About</button>

          {/* Switch的作用是,精确匹配路由,忽略一切不正常的路由地址,例如Down组件 */}
          <Switch>
            <Route path={LinkDate[0].link} component={Home}></Route>
            <Route path={LinkDate[1].link + "/:id"} component={About}></Route>
            <Route path={LinkDate[2].link} component={Introduce}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
