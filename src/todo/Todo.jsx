import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoDate from "./TodoDate";
import pinkDot from "../img/pinkDot.svg";
import List from './List';

export default function ToDo() {
  const [show,setShow] = useState(true); // 임시 코드 (할 일 보여지게)
  let navigate = useNavigate();

  function moveAddListHandler() {
    navigate("/addTodoList");
  }
  return (
    <>
      <TodoDate />
      <div className="addToDoButtonBox" onClick={moveAddListHandler}>
        <img src={pinkDot} alt="pinkDot" style={{position: "absolute", left: "0.94rem"}} />
        <button className="addToDoButton">할 일 목록 추가하기</button>
      </div>
      {show && <div style={{marginTop: "1.75rem", display: "flex", flexDirection: "column", gap:"0.61rem", marginLeft: "1.56rem"}}><List /></div>}
    </>
  )
}