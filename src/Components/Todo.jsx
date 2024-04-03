import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addtodo } from "../Redux/Todo/action";
import TodoItem from "./TodoItem";
import { edittodo } from "../Redux/Todo/action";
import style from "../Css/Todo.module.css";
import { modechange } from "../Redux/Todo/action";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [id, setId] = useState("");



  const dispatch = useDispatch();
  const todoData = useSelector((state) => {
    return state.todo;
  });

  const mode = useSelector((state) => {
    return state.modethe;
  });


  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleAdd() {
    let obj = {
      id: Math.random() + Date.now(),
      title: title,
      status: false,
    };
    dispatch(addtodo(obj));
    setTitle("");
  }

  function handleStatus(id) {
    let editdata1 = todoData.map((ele) => {
      if (ele.id == id) {
        ele.status = !ele.status;
        return ele;
      } else {
        return ele;
      }
    });
    dispatch(edittodo(editdata1));
  }

  function handledelete(id) {
    let deletedata = todoData.filter((ele) => {
      if (ele.id != id) {
        return ele;
      }
    });
    dispatch(edittodo(deletedata));
  }

  function handleShow(val1, val2) {
    setShow(true);
    setEditTitle(val2);
    setId(val1);
  }

  function handleHide() {
    setShow(false);
    let updatedData = todoData.map((ele) => {
      if (ele.id == id) {
        ele.title = editTitle;
        return ele;
      } else {
        return ele;
      }
    });
    dispatch(edittodo(updatedData));
  }

  function handlechangetitle(event) {
    setEditTitle(event.target.value);
  }

  

  function handleMode() {
    dispatch(modechange(!mode));
  }

  return (
    <div className={mode ? "" : style.todobody}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={handleTitle}
        style={{
          padding: "5px 14px",
          marginLeft: "14px",
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "14px",
        }}
        className={mode ? "" : style.darkdiv}
      />

      <button
        onClick={handleAdd}
        className={mode ? "" : style.buttoncolor}
        style={{ marginLeft: "14px", padding: "4px 12px" }}
      >
        Add
      </button>
      <button
        onClick={handleMode}
        className={mode ? "" : style.buttoncolor}
        style={{ marginLeft: "14px", padding: "4px 12px" }}
      >
        {mode ? "dark" : "light"}
      </button>

      {show && (
        <div style={{ marginTop: "14px" }}>
          <input
            type="text"
            placeholder="title"
            value={editTitle}
            onChange={handlechangetitle}
            style={{
              padding: "5px 14px",
              marginLeft: "14px",
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
            className={mode ? "" : style.darkdiv}
          />
          <button
            onClick={handleHide}
            className={mode ? "" : style.buttoncolor}
            style={{ marginLeft: "14px", padding: "4px 12px" }}
          >
            Edit
          </button>
        </div>
      )}

      {todoData.map((ele) => {
        return (
          <TodoItem
            key={ele.id}
            {...ele}
            handleStatus={handleStatus}
            handledelete={handledelete}
            handleShow={handleShow}
          />
        );
      })}
    </div>
  );
};

export default Todo;
