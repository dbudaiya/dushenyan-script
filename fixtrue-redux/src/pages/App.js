import React, { Component } from "react";
import store from "../store";
import { NameAction } from "../store/createAction";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: store.getState().name,
    };
    this.btn = this.btn.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        name: store.getState().name,
      });
    });
  }

  componentWillUnmount() {
    store.unsubscribe();
  }

  btn() {
    store.dispatch(NameAction());
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.btn}>点击按钮</button>
      </div>
    );
  }
}
