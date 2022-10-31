import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

function Time() {
  return <h1>Long Time</h1>;
}

function Happy() {
  return <h2>So happy</h2>;
}

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>introduce组件</h1>
        <NavLink to="/introduce/time">Time | </NavLink>
        <NavLink to="/introduce/happy"> | happy</NavLink>
        <button
          onClick={(e) => {
            this.btn();
          }}
        >
          点击阿牛
        </button>

        <Switch>
          <Route path="/introduce/time" component={Time}></Route>
          <Route path="/introduce/happy" component={Happy}></Route>
        </Switch>
      </div>
    );
  }

  btn() {
    console.log(this.props.location);
    console.log(this.props.history);
    this.props.history.push("/introduce/time");
  }
}
