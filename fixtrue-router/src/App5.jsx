import React, { Component, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import routes from "./routes";

const style = {
  color: "red",
};
export default class App5 extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <NavLink to="/home" activeStyle={style}>
            Home |
          </NavLink>
          <NavLink to="/about" activeStyle={style}>
            About |
          </NavLink>

          {renderRoutes(routes)}
        </Suspense>
      </div>
    );
  }
}
