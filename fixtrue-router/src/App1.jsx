import React, { Component } from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";

import LinkDate from "./common/later-data.js";

import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Introduce from "./pages/Introduce/index";

export default class App1 extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Link to={LinkDate[0].link}>{LinkDate[0].title}</Link>
          <Link to={LinkDate[1].link}>{LinkDate[1].title}</Link>
          <Link to={LinkDate[2].link}>{LinkDate[2].title}</Link>

          <Route path={LinkDate[0].link} component={Home}></Route>
          <Route path={LinkDate[1].link} component={About}></Route>
          <Route path={LinkDate[2].link} component={Introduce}></Route>
        </HashRouter>
      </div>
    );
  }
}
