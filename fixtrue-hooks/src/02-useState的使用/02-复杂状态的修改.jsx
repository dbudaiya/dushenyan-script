import React, { useState } from "react";

export default function App() {
  const [names, setNames] = useState(["Tom", "lizien", "hanyaqian"]);
  const [students, setStudents] = useState([
    { id: 1, name: "dushenyan", age: 12 },
    { id: 2, name: "lizien", age: 32 },
    { id: 3, name: "hanyaqian", age: 22 },
  ]);
  function addNames() {
    names.push("zxiuxian");
    setNames(names);
  }

  function newStudents(index) {
    // 浅拷贝
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }
  return (
    <div>
      <h2>朋友数据:</h2>
      <ul>
        {names.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {/* 错误写法 */}
      <button onClick={addNames}>添加数据</button>
      <button onClick={(e) => setNames([...names, "dushenyan"])}>
        添加数据
      </button>

      <h2>学生列表: </h2>
      <ul>
        {students.map((item, index) => {
          return (
            <>
              <li key={item.id}>
                <span>
                  姓名:{item.name} 年龄:{item.age}
                </span>
                <button onClick={(e) => newStudents(index)}>age+1</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
