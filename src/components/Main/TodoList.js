import React, { useState } from "react";
import InputBox from "../InputBox.js/InputBox";
import { DisplayScreen } from "../DisplayScreen/DisplayScreen";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (value === "") {
      alert("Please Enter the task");
    } else {
      const todolist = {
        id: list.length,
        value: value,
      };
      setList([...list, todolist]);

      setValue("");
    }
  };

  const remove = (id) => {
    const restlist = list.filter((removetask) => removetask.id !== id);
    setList(restlist);
  };

  return (
    <div>
      <InputBox onChange={onChange} value={value} onClick={onClick} />
      <DisplayScreen
        list={list}
        remove={remove}
        onChange={onChange}
        setList={setList}
        onClick={onClick}
      />
    </div>
  );
};

export default TodoList;
