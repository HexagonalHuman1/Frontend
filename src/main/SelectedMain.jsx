import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./main.css";
import Diary from "../diary/Diary";
import SelectedToDo from "../todo/SelectedTodo";
import SelectedNav from "../components/SelectedNav";


export default function SelectedMain() {
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
      {todoButton && <SelectedToDo content={selectedlist} />}
      {diaryButton && <Diary edit={edit} setEdit={setEdit} content={selectedlist} />}

      <SelectedNav />
    </>
  )
}