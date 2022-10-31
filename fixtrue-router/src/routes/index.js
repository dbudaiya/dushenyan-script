// router/index.js
import React from "react";
import { Redirect } from "react-router";

// 重點觀察位置
const routes = [
  {
    path: "/",
    exact:true,
    render:()=><Redirect to="/home"/>
  },
  {
    path: "/home",
    component: React.lazy(() => import("../pages/Home/index")),
    routes: [
      {
        path: "/home/time",
        component: React.lazy(() => import("../pages/Home/p-about/Time")),
      },
      {
        path: "/home/happy",
        component: React.lazy(() => import("../pages/Home/p-about/Happy")),
      },
    ],
  },
  {
    path: "/about/:id",
    component: React.lazy(() => import("../pages/About/index")),
  },
  {
    path: "/introduce",
    component: React.lazy(() => import("../pages/Introduce/index")),
  },
];

export default routes;
