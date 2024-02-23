import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./main.css";
import Diary from "../diary/Diary";
import ToDo from "../todo/Todo.jsx";
import Nav from "../components/Nav";


export default function Main() {
  const [todoButton, setToDoButton] = useState(true);
  const [diaryButton, setDiaryButton] = useState(false);
  const [edit, setEdit] = useState(false);

  const location = useLocation();
  const selectedlist = location.state?.selectedContents;

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
      {todoButton && <ToDo content={Array.isArray(selectedlist) && selectedlist} />}
      {diaryButton && <Diary edit={edit} setEdit={setEdit} content={selectedlist} />}

      <Nav />
    </>
  )
}