import React from "react";

const InputBox = ({ onChange, value, onClick }) => {
  const keyDown = (event) => {
    if (event.key === "Enter") {
      onClick();
    }
  };
  return (
    <>
      <div className="inputcontainer">
        <h1>To Do List</h1>
        <div className="smallinputcontainer">
          <input
            type="text"
            placeholder="Add your task"
            className="inputbox"
            onChange={onChange}
            value={value}
            onKeyDown={(event) => keyDown(event)}
          />

          <button className="addbutton" onClick={onClick}>
            Add
          </button>
        </div>
        <div className="tasklist">
          <h1 className="list">Task Lists</h1>
        </div>
      </div>
    </>
  );
};
export default InputBox;
