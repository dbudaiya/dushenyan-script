import React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { getAction } from "../store/createAction";
class App extends PureComponent {
  componentDidMount() {
    this.props.getbanner();
  }
  render() {
    return (
      <div>
        <h1>中间件使用</h1>
        <div style={{ width: 400, height: 320 }}>
          {this.props.banner.map((item, index, key) => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return <img src={item.image} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

// 类组件想要展示数据时,得先把数据传入到connect中
const mapStateToProps = (state) => ({
  banner: state.banner,
});

const mapDispatchToProp = (dispatch) => ({
  getbanner() {
    dispatch(getAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProp)(App);
