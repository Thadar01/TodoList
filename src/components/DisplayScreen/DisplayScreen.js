import React, { useState } from "react";

export const DisplayScreen = ({ list, remove }) => {
  //States
  const [editableFieldId, setEditableFieldId] = useState(null);
  const [save, setSave] = useState("Edit");

  //Edit function
  const clickEdit = (id) => {
    setEditableFieldId(id);
    console.log("edit", id);
    if (save === "Edit") {
      setSave("Save");
    } else {
      setSave("Edit");
      //setSave((prevSave) => (prevSave === "Edit" ? "Save" : "Edit"));
    }
  };
  const keyDown = (event) => {
    if (event.key === "Enter") {
      setSave((prevSave) => (prevSave === "Edit" ? "Save" : "Edit"));
    }
  };

  //display
  return (
    <div className="displaymaincontainer">
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              defaultValue={task.value}
              className="inputList"
              readOnly={
                editableFieldId === task.id && save === "Save" ? false : true
              }
              onClick={() => {
                clickEdit(task.id);
              }}
              onKeyDown={(event) => keyDown(event)}
            />
            <div className="editdelete">
              <button
                className="edit"
                onClick={() => {
                  clickEdit(task.id);
                  console.log(task.id);
                }}
                style={
                  editableFieldId === task.id && save === "Save"
                    ? {
                        backgroundColor: "rgb(177, 238, 57)",
                        color: "black",
                      }
                    : null
                }
              >
                {editableFieldId === task.id ? save : "Edit"}
              </button>
              <button className="delete" onClick={() => remove(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
