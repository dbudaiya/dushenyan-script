import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

export default class index extends Component {
  componentDidMount() {
    console.log(this.props.route);
  }
  render() {
    return (
      <div>
        <h1>Home组件</h1>
        <NavLink to="/home/time">Time |</NavLink>
        <NavLink to="/home/happy">happy |</NavLink>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
