import React, { Component } from "react";
// 1.导入prop-types依赖,默认已经安装好了的.
import PropTypes from "prop-types";

function NumList(props){

}


class ChildApp extends Component {
  render() {
    const { name, age, movies } = this.props;
    return (
      <div>
        {/* 1.1打印输出IU的姓名和年龄 */}
        <h3>
          姓名:{name} 年龄:{age}
        </h3>
        {/* 1.2map方法遍历 */}
        <ul key={index}>
          {movies.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}


// 4.另外一种定义方式(ES6)
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 注:下面的name可为string类型,但传入数值,布尔,对象,数值时,就得加上{值}  */}
        <ChildApp
          name="李智恩"
          age={18}
          movies={["ลลิษา มโนบาล", "Lalisa Manoban", "라리사 마노반"]}
        />

        {/* 注:将会使用defaultProps中的值 */}
        {/* <ChildApp /> */}
      </div>
    );
  }
}



// 2.组件中的一个属性(小驼峰写法)
ChildApp.propTypes = {
  // 注:下面的是大写的P开头,引用的是刚刚导入的
  // 2.11name为字符串类型,不能为空
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  movies: PropTypes.array,
};

// 3.添加默认值defaultProps
ChildApp.defaultProps = {
  name: "李智恩",
  age: 27,
  //   默认取值中,会发现这个组件更上一个组件位置发生改变
  movies: ["Lalisa Manoban", "라리사 마노반", "ลลิษา มโนบาล"],
};
