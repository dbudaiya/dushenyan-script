// import { createStore } from "redux";
// import reducer from "./reducer";

// const store = createStore(reducer);

// export default store;

// 中间件库的使用
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

// 注意是按照redux下的thunk
import thunkMiddleWare from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
export default store;
