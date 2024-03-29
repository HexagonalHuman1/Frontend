import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoDate from "./TodoDate";
import pinkDot from "../img/pinkDot.svg";
import List from './List';

export default function ToDo({content}) {
  const [mainList, setMainList] = useState(content);
  const [completedCount, setCompletedCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const currentColorActive = localStorage.getItem("color") === "true";
    setActive(currentColorActive);
  }, []);

  let navigate = useNavigate();

  function moveAddListHandler() {
    navigate("/addTodoList");
  }

  function handleDeleteList(content) {
    setMainList(prev => {
      const updatedList = prev.filter((item) => item !== content);
      localStorage.setItem("todoLists", JSON.stringify(updatedList));
      return updatedList;
    })
  }

  function handleCompleteChange(isCompleted) {
    setCompletedCount((prev) => prev + (isCompleted ? 1 : -1));
  }

  useEffect(() => {
    localStorage.setItem("color", active.toString());
  },[active]);

  useEffect(() => {
    setActive(completedCount === mainList.length && mainList.length > 0 )
  }, [completedCount, mainList.length]);

  return (
    <>
      <TodoDate active={active} />
      <div className="addToDoButtonBox" onClick={moveAddListHandler}>
        <img src={pinkDot} alt="pinkDot" style={{position: "absolute", left: "0.94rem"}} />
        <button className="addToDoButton">할 일 목록 추가하기</button>
      </div>

      <div style={{marginTop: "1.75rem", display: "flex", flexDirection: "column", gap:"0.61rem", marginLeft: "1.56rem"}}>
        {Array.isArray(mainList) && mainList.map((item, index) => {
          return (<List item={item} key={index} handleDeleteList={handleDeleteList} handleCompleteChange={handleCompleteChange} />)
        })}
      </div>
    </>
  )
}