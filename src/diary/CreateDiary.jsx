import styled from "styled-components";
import closeImg from "../img/pinkClose.svg";
import { useNavigate } from "react-router-dom";
import picture from "../img/picture.png";
import ChoiceList from "../components/ChoiceList";

const TitleText = styled.p`
  color: #DD8EA4;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-heght: normal;
  margin: 0;
  padding-top: 1.56rem;
`  

const CompleteText = styled.p`
  color: #DD8EA4;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin: 0;
  position: absolute;
  top: 1.69rem;
  right: 1.38rem;
`

const UserTitle = styled.input`
  color: #B3B3B3;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2.25rem;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
`

const DateText = styled.p`
  margin: 0;
  margin-top: 0.88rem;
  text-align: center;
  color: #6E9DF8;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const UploadImgContainer = styled.div`
  width: 19.6875rem;
  height: 9.9375rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid #DD8EA4;
  background: #FFF;
  margin: 0 auto;
  margin-top: 1.44rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChoiceText = styled.p`
  color: #B3B3B3;
  text-align: center;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-top: 1.69rem;
`

const AITextBox = styled.div`
  height: 2rem;
  background: #D9D9D9;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AIText = styled.p`
  color: #31383F;
  margin: 0;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export default function CreateDairy() {
  let navigate = useNavigate();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  function moveMain() {
    navigate("/");
  }

  return (
    <>
      <TitleText>일기 작성</TitleText>
      <img src={closeImg} alt="closeImg" style={{position: "absolute", left: "1.44rem", top: "1.62rem", cursor: "pointer"}} onClick={moveMain} />
      <form>
        <button style={{border: "none", background: "inherit"}}><CompleteText onClick={moveMain}>완료</CompleteText></button>
        <div style={{textAlign: "center"}}><UserTitle placeholder="제목을 입력하세요" /></div>
        <DateText>{year}년 {month}월 {date}일 {days[day]}</DateText>
        <UploadImgContainer>
          <input type="file" id="imgUpload" multiple accept=".png, .jpg, .jpeg" style={{display: "none"}} />
          <label htmlFor="imgUpload" >
            <div style={{borderRadius: "1rem", border: "1px solid #DD8EA4", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
              <img src={picture} alt="pictureImg" />
            </div>
          </label>
        </UploadImgContainer>
        <ChoiceText>일기로 쓸 할 일을 선택하세요</ChoiceText>
        <div style={{marginTop: "1.31rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
          <ChoiceList />
          <ChoiceList />
          <ChoiceList />
        </div>
        <AITextBox>
          <AIText>AI로 쓰기</AIText>
        </AITextBox>
      </form>
    </>
  )
}