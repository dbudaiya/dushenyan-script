import React, { Component } from "react";
import Profile from "./Contextpage/Profile";
import { connect } from "react-redux";
import instance from "../network/require";
import { bannerAction } from "../store/createAction";
// import ProfileHeader from "./Subpage/ProfileHeader";

export const SubpageContext = React.createContext();

// r如果传入的组件时函数是组件，那么下面的代码可不写
// ProfileHeader.contextType = SubpageContext;

class Subpage extends Component {
  componentDidMount() {
    instance.then((res) => {
      const data = res.data.data;
      this.props.getBanner(data.banner.list);
    });
  }
  render() {
    return (
      <>
        <SubpageContext.Provider value={this.props.banner}>
          <Profile />
        </SubpageContext.Provider>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  banner: state.banner,
});

const mapDispatchToProps = (dispatch) => ({
  getBanner: function (banner) {
    dispatch(bannerAction(banner));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Subpage);
