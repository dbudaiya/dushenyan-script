import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bannerAction } from "../store/createAction";
import axios from "axios";

// 6.不使用connect,使用react-redux提供的hooks函数进行数据操作

export default memo(function App6(props) {
  // 使用useSelector来获取数据
  const banner = useSelector((state) => state.banner);
  const BDispatch = useDispatch();
  useEffect(() => {
    // 使用useDispatch来派发事件
    axios({
      url: "http://123.207.32.32:8000/api/h8/home/multidata",
      method: "GET",
    }).then((res) => {
      const data = res.data.data;
      BDispatch(bannerAction(data.banner.list));
    });
  });
  return (
    <>
      <h1>不使用connect,使用react-redux提供的hooks函数进行数据操作</h1>
      <div style={{ width: 400, height: 320 }}>
        {banner.map((item, index, key) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <img src={item.image} key={index} />;
        })}
      </div>
    </>
  );
});
