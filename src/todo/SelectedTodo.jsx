import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoDate from "./TodoDate";
import pinkDot from "../img/pinkDot.svg";
import List from './List';

export default function SelectedToDo({content}) {
  const [mainList, setMainList] = useState(content);
  let navigate = useNavigate();

  function moveAddListHandler() {
    navigate("/addTodoList");
  }

  function handleDeleteList(content) {
    setMainList(prev => {
      return prev.filter((item) => item !== content);
    })
  }

  return (
    <>
      <TodoDate />
      <div className="addToDoButtonBox" onClick={moveAddListHandler}>
        <img src={pinkDot} alt="pinkDot" style={{position: "absolute", left: "0.94rem"}} />
        <button className="addToDoButton">할 일 목록 추가하기</button>
      </div>

      <div style={{marginTop: "1.75rem", display: "flex", flexDirection: "column", gap:"0.61rem", marginLeft: "1.56rem"}}>
        {mainList.map((item, index) => {
          return (<List item={item} key={index} handleDeleteList={handleDeleteList} />)
        })}
      </div>
    </>
  )
}