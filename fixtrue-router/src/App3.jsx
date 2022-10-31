import React, { Component, useState } from "react";
import { HashRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";

import LinkDate from "./common/later-data.js";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Introduce from "./pages/Introduce/index";
const style = {
  color: "red",
};

function Login() {
  const [Login, setLogin] = useState(false);
  return Login ? <h1>Down组件显示登录</h1> : <Redirect to={LinkDate[0].link} />;
}

export default class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "99874532",
    };
  }
  render() {
    return (
      <div>
        <HashRouter>
          {/* activeStyle是当前组件被使用后悔使用到的样式 */}

          {/* activeClassname  是给刚被使用到的组件设置样式名,可在样式中采取该名去设置样式 */}
          <Redirect exact from='/' to='/home' />
          <NavLink to={LinkDate[0].link} activeStyle={style} active>
            {LinkDate[0].title}
          </NavLink>
          <NavLink
            to={LinkDate[1].link + `/${this.state.id}`}
            activeStyle={style}
          >
            {LinkDate[1].title}
          </NavLink>
          <NavLink to={LinkDate[2].link} activeStyle={style}>
            {LinkDate[2].title}
          </NavLink>
          <NavLink to="login" activeStyle={style}>
            Login
          </NavLink>

          {/* Switch的作用是,精确匹配路由,忽略一切不正常的路由地址,例如Down组件 */}
          <Switch>
            <Route path={LinkDate[0].link} component={Home}></Route>
            <Route path={LinkDate[1].link + "/:id"} component={About}></Route>
            <Route path={LinkDate[2].link} component={Introduce}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
