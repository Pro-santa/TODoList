import React from "react";

function TODoItem(props) {
  const [isDone, setIsDone] = React.useState(false);

  function handleClick() {
    setIsDone(prevValues => {
      return !prevValues;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.Text}
      </li>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TODoItem;
