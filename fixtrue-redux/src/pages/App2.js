import React, { Component } from "react";
import { connect } from "react-redux";
import { NameAction } from "../store/createAction";

class App2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.btn.bind(this)}>切换</button>
      </div>
    );
  }
  btn() {
    this.props.changName();
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    changName: () => {
      dispatch(NameAction());
    },
  };
};

export default connect(
  (state) => ({
    name: state.name,
  }),
  mapDispatchToProp
)(App2);
