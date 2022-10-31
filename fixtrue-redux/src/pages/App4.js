import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { bannerAction } from "../store/createAction";

// 引出中间件的前生,是为什么需要使用中间件
class App4 extends Component {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/api/h8/home/multidata",
      methods: "GET",
    }).then((res) => {
      const data = res.data.data;
      this.props.getBanner(data.banner.list);
    });
  }
  render() {
    return (
      <>
        <h1>类组件异步处理状态数据</h1>
        <div style={{ width: 400, height: 320 }}>
          {this.props.banner.map((item, index, key) => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return <img src={item.image} key={index} />;
          })}
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    banner: state.banner,
  }),
  (dispatch) => ({
    getBanner: function (banner) {
      dispatch(bannerAction(banner));
    },
  })
)(App4);
