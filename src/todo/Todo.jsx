import { useNavigate } from 'react-router-dom';
import TodoDate from "./TodoDate";
import pinkDot from "../img/pinkDot.svg";

export default function ToDo() {
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
    </>
  )
}