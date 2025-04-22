import React, { createContext } from "react";
import Child from "./Child";

export const MyContext = createContext();

export default function Parent() {
  const data = ["Apple", "Banana", "Cherry"];

  return (
    <MyContext.Provider value={data}>
      <div>
        <h2>Parent Component</h2>
        <Child />
      </div>
    </MyContext.Provider>
  );
}
