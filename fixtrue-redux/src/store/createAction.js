import { CHANGE_NAME, GET_BANNER } from "./constances";
import axios from "axios";
export const NameAction = () => ({
  type: CHANGE_NAME,
});

// 注意这下的方法也需要进行导出
export const bannerAction = (banner) => ({
  type: GET_BANNER,
  banner,
});

//定义中间件函数
export const getAction = (dispatch) => {
  // console.log("红红火火",dispatch);
  axios({
    url: "http://123.207.32.32:8000/api/h8/home/multidata",
    method: "GET",
  }).then((res) => {
    const data = res.data.data;
    dispatch(bannerAction(data.banner.list));
  });
};
