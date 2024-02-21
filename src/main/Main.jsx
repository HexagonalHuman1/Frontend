import { useState } from "react";
import Header from "../components/Header";
import "./main.css";
import ToDo from "../todo/Todo";
import Diary from "../diary/Diary";
import Nav from "../components/Nav";
import List from "../todo/List";


export default function Main() {
  const [todoButton, setToDoButton] = useState(true);
  const [diaryButton, setDiaryButton] = useState(false);
  const [show,setShow] = useState(true); // 임시 코드 (할 일 보여지게)

  function handleDiaryActive() {
    setDiaryButton(true);
    setToDoButton(false);
  }

  function handleToDoButtonActive() {
    setToDoButton(true);
    setDiaryButton(false);
  }

  return (
    <>
      <Header />
      <div className="selectButtonBox">
        <button className={todoButton ? "selectButton buttonActive" : "selectButton"} onClick={handleToDoButtonActive}>TODO</button>
        <button className={diaryButton ? "selectButton buttonActive" : "selectButton"} onClick={handleDiaryActive}>일기쓰기</button>
      </div>
      {todoButton && <ToDo />}
      {diaryButton && <Diary />}

      {show && <div style={{marginTop: "1.75rem", display: "flex", flexDirection: "column", gap:"0.61rem", marginLeft: "1.56rem"}}><List /></div>}

      <Nav />
    </>
  )
}