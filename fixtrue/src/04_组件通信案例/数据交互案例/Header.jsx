import React from "react";
import {PropTypes} from "prop-types";
import HeaderMovieslist from "./HeaderMovieslist";
export default function Header(props) {
  return (
    <div>
      <h2>个体数据展示:</h2>
      <span>姓名:{props.name}</span>
      <span>年龄:{props.age}</span>
      <HeaderMovieslist />
    </div>
  );
}

Header.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number,
}