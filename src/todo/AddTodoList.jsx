import styled from "styled-components";
import closeImg from "../img/close.svg";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import SelectDate from "../components/SelectDate";
import SelectedTodoList from "./SelectedTodoList.jsx";
import { useState } from "react";

const BodyContainer = styled.div`
  position: relative;
  background: #31383F;
  height: 50rem;
  display: flex;
  flex-direction: column;
`

const TitleText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-top: 1.56rem;
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.06rem;
`

const CreateButton = styled.button`
  width: 18.875rem;
  height: 2.125rem;
  flex-shrink: 0;
  border-radius: 1.3125rem;
  border: 1px solid #919191;
  background: #D9D9D9;
  margin: 0 auto;
  margin-top: 2.75rem;
  color: #000;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer; 
`

export default function AddTodoList() {
  let navigate = useNavigate();

  const listContents = [
    ["10분 명상하기","캐모마일 티 마시기","공원 산책하기"],
    ["그림 일기 쓰기","10분 스트레칭 하기","카페에서 책 필사하기"],
    ["쇼핑하기", "8시간 숙면하기", "친구랑 수다떨기"]
  ]

  const [number, setNumber] = useState(0);
  const [refresh, setRefresh] = useState(listContents[number]);

  const [selectedContents, setSelectedContents] = useState([]);

  const handleAddList = (content) => { 
    setSelectedContents(prev => {
      if (prev.includes(content)) {
        return prev;
      } else {
        return [...prev, content];
      }
    })
  }

  const handleDeleteList = (content) => {
    setSelectedContents(prev => {
      return prev.filter((item) => item !== content);
    })
  }

  const handleRefresh = () => {
    const nextNumber = (number+1) % listContents.length;
    setRefresh(listContents[nextNumber]);
    setNumber(nextNumber);
  }

  function moveMainHandler() {
    navigate("/");
  }

  function moveSelectedMainHandler() {
    navigate("/selectedMain", {state: { selectedContents }});
  }
  return (
    <BodyContainer>
      <img src={closeImg} alt="closeImg" onClick={moveMainHandler} style={{cursor: "pointer", position: "absolute", top: "0.62rem", right: "0.97rem"}} />
      <TitleText>목록 추가</TitleText>
      <div style={{marginLeft: "1.56rem", marginTop: "2.31rem", display: "flex", gap: "10.19rem", alignItems: "center"}}>
        <p style={{color: "#DD8EA4", fontFamily: "Inter", fontSize: "1.25rem", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", margin: "0"}}>추천 목록</p>
        <button style={{width: "4.75rem", height: "1.0625rem", borderRadius: "0.3125rem", border: "none", background: "#DD8EA4", color: "#000", fontFamily: "Inter", fontSize: "0.75rem", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", cursor: "pointer"}} onClick={handleRefresh}>새로고침</button>
      </div>
      <ListContainer>
        {refresh.map((content, index) => {
          return (
            <TodoList key={index} content={content} handleAddList={handleAddList} />
          )
        })}
      </ListContainer>
      <div style={{marginTop: "2.75rem", height: "0.0625rem", background: "#DD8EA4"}} />
      <p style={{marginTop: "1.31rem", marginLeft: "1.56rem", color: "#DD8EA4", fontFamily: "Inter", fontSize: "1.25rem", fontStyle: "normal", fontWeight: "400", lineHeight: "normal" }}>선택한 목록</p>
      <ListContainer>
        {selectedContents.map((content, index) => {
          return (
            <SelectedTodoList key={index} content={content} handleDeleteList={handleDeleteList} />
          )
        })}
      </ListContainer>

      <SelectDate />

      <CreateButton onClick={moveSelectedMainHandler}>이대로 만들래요</CreateButton>
    </BodyContainer>
  )
}