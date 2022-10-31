import React, { useContext, useEffect } from "react";

import { UserContext, ThemeContext } from "./App";


export default function UseContext() {

  // 多个context共享时的方式会存在大量的嵌套,Context Hooks允许我们通过Hook来直接对某一个Context的值
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    // 打印出context中的value值
    console.log(user, theme);
  }, [theme, user]);
  return (
    <div>
      <h2>姓名:{user.name}</h2>
      <h2 style={{ color: theme.color }}>年龄:{user.age}</h2>
    </div>
  );
}
