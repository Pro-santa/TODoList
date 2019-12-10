import React, { useState } from "react";
import ToDoItem from "./ToDoItem"; //rendering jsx file.
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]); // empty array for holding the new value of item.

  function handleChange(event) {
    const newValue = event.target.value; // for having the input text from the form input
    setInputText(newValue);
  }
  //for adding the item we need to get hold of the prevValues and then update them by the new values.
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  //For deleting the item from the list we need to tap into the id of the item which is rendered by the map function
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((todoItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              Text={todoItem}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
