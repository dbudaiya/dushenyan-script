import React, { createContext } from "react";
import UseContext from "./01-useContext";

export const UserContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  return (
    <div>
      <h2>useContext的使用</h2>
      <UserContext.Provider value={{ name: "lizien", age: 26 }}>
        <ThemeContext.Provider value={{ color: "red" }}>
          <UseContext />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
