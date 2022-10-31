import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { bannerAction } from "../store/createAction";
import instance from "../network/require";
// 5.函数组件处理异步状态数据
function App5(props) {
  const { getBanner, banner } = props;
  useEffect(() => {
    instance.then(res=>{
      const data = res.data.data
        getBanner(data.banner.list);
    })
  }, [getBanner]);
  return (
    <>
      <h1>函数组件处理异步状态数据</h1>
      <div style={{ width: 400, height: 320 }}>
        {banner.map((item, index, key) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img src={item.image} key={index} />;
        })}
      </div>
    </>
  );
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
)(memo(App5));
