import React, { PureComponent } from "react";
import Header from "./Header";
import {MyContext} from './MyContext'
export default class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      name: "lizien",
      age: 26,
      movies: ["ลลิษา มโนบาล", "Lalisa Manoban", "라리사 마노반"],
    };
  }

  render() {
    const { name, age, movies } = this.state;
    return (
      <div>
        <MyContext.Provider value={movies}>
          <Header name={name} age={age} />
        </MyContext.Provider>
      </div>
    );
  }
}
