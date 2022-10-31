import React from "react";
import { MyContext } from "./MyContext.js";
export default function HeaderMovieslist(props) {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          const listItems = value.map((nums, index) => {
            return <li key={index}>{nums}</li>;
          });
          return (
            <div>
              {/* <p>{value ? value[1] : undefined}</p> */}
              <ul>
                {listItems}
                {/* {
                      value.map((item,index)=><li key={index}>{item}</li>)
                  } */}
              </ul>
            </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

HeaderMovieslist.contextType = MyContext;
