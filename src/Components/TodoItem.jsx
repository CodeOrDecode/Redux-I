import React from 'react'
import style from "../Css/Todoitem.module.css"
import { useSelector } from 'react-redux';

const TodoItem = ({id,title,status,handleStatus,handledelete,handleShow}) => {

  const mode = useSelector((state) => {
    return state.modethe;
  });

  console.log(mode);

  return (
    <div className={mode ?style.smalldiv:style.darkdiv}>
        <h2 style={{marginBottom:"14px"}}>{title}</h2>
        <button className={mode ?"":style.buttoncolor}  style={{padding: "4px 12px"}} onClick={()=>{handleStatus(id)}}>{status?"completed":"pending"}</button>
        <button className={mode ?"":style.buttoncolor} style={{marginLeft:"12px",padding: "4px 12px"}}  onClick={()=>{handledelete(id)}}>Delete</button>
        <button className={mode ?"":style.buttoncolor} style={{marginLeft:"12px",padding: "4px 12px"}} onClick={()=>{handleShow(id,title)}}>Edit Title</button>
    </div>
  )
}

export default TodoItem