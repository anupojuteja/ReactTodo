import React, { useContext, useState } from "react";
import { MyContext } from "./Parent";

export default function SubChild() {
  const { data, setData } = useContext(MyContext);
  const [editIndex, setEditIndex] = useState(null);
  const [newValue, setNewValue] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewValue(data[index]);
  };

  const handleSave = () => {
    const updatedData = [...data];
    updatedData[editIndex] = newValue;
    setData(updatedData);
    setEditIndex(null);
    setNewValue("");
  };

  return (
    <div>
      <h6>SubChild Component (Editable)</h6>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                />
                <button className="btn btn-success btn-sm ms-2" onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
