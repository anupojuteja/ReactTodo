import React, { useContext, useState } from "react";
import { MyContext } from "./Parent";

export default function SubChild() {
  const { data, setData } = useContext(MyContext);
  const [editIndex, setEditIndex] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [newItem, setNewItem] = useState("");

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

  const handleAdd = () => {
    if (newItem.trim() !== "") {
      setData([...data, newItem]);
      setNewItem("");
    }
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div>
      <h6>SubChild Component (Editable)</h6>
      <div className="mb-3">
        <input
          type="text"
          value={newItem}
          placeholder="Add new item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn btn-primary btn-sm ms-2" onClick={handleAdd}>Add</button>
      </div>
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
                <button className="btn btn-info btn-sm ms-2" onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button className="btn btn-warning btn-sm ms-2" onClick={() => handleEdit(index)}>Edit</button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
