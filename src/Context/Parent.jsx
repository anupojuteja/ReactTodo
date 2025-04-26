import React, { createContext, useState } from "react";
import Child from "./Child";

export const MyContext = createContext();

export default function Parent() {
  const [data, setData] = useState(["Apple", "Banana", "Cherry"]);

  return (
    <MyContext.Provider value={{ data, setData }}>
      <div>
        <h2>Parent Component</h2>
        <Child />
      </div>
    </MyContext.Provider>
  );
}
