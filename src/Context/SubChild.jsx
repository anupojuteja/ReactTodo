import React, { useContext } from "react";
import { MyContext } from "./Parent";

export default function SubChild() {
  const items = useContext(MyContext);

  return (
    <div>
      <h6>SubChild Component</h6>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
