import { useState, useEffect } from "react";
import styled from "styled-components";
import dots from "../img/dots.png";
import ModifyModal from "../components/ModifyModal";
import camo from '../img/camo.jpg';
import cat from '../img/cat.jpg';

const DiaryContainer = styled.div`
  display: flex;
  flex-direction : column;
  align-items : center;
  width: 20.6875rem;
  height: 20.125rem;
  flex-shrink: 0;
  border-radius: 1.4375rem;
  border: 1px solid #D2D2D2;
  background: #FFF;
  position: relative;
  margin: 0 auto;
  margin-top: 0.44rem;
`

const DiaryText = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const WrittenDate = styled.p`
  color: #B3B3B3;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`

const Img = styled.img`
  width : 8.5rem;
  height: 8.5rem;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content : center;
  margin-bottom : 0.4rem;
`

const Content = styled.div`
  display: flex;
  justify-cotent: center;
  text-align : center;
  color: #000;
font-family: Inter;
font-size: 0.75rem;
align-items : center;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export default function WrittenDiary({edit, setEdit}) {
  const [userTitle,setUserTitle] = useState("재잘재잘캐모마일");
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const [flag, setFlag]=useState(0);

  useEffect(() => {
    const flag = localStorage.getItem('flag');
    if (flag) {
      setFlag(parseInt(flag));
    }
  }, []);

  const handleEdit = () => {
    setEdit(true);
  }

  return (<>
    {flag === 1 && (
        <DiaryContainer>
          <img src={dots} alt="dotsImg" style={{width: "1.25rem", height: "1.2rem", position: "absolute", top: "1.2rem", right: "1.87rem", cursor: "pointer"}} onClick={handleEdit} />
          <DiaryText>재잘재잘캐모마일</DiaryText>
          <WrittenDate>{year}년 {month}월 {date}일 {days[day]}</WrittenDate>
          <ImgContainer><Img src={camo}/></ImgContainer>
          <Content>
          조용한 아침, 창밖 햇살을 받으며 10분의 명상으로<br/>
          마음을 가라앉히고, 캐모마일 티 한 잔을 마셨다.<br/>
          이어서 카페로 향해 책을 읽으며 여유로운<br/>
          시간을 보내며 하루를 마무리했다.<br/>
          마음의 여유를 가지고 내일을 기대하는 중이다.
          </Content>
        </DiaryContainer>
      )}
    <DiaryContainer>
      <img src={dots} alt="dotsImg" style={{width: "1.25rem", height: "1.2rem", position: "absolute", top: "1.2rem", right: "1.87rem", cursor: "pointer"}} onClick={handleEdit} />
      <DiaryText>요즘잘자쿨냥이</DiaryText>
      <WrittenDate>{year}년 {month}월 {date}일 {days[day]}</WrittenDate>
      <ImgContainer><Img src={cat}/></ImgContainer>
      <Content>
      오늘은 고양이와 함께 즐거운 시간을 보냈다.<br/>
      끈적끈적한 놀이를 하면서 행복함을 느꼈다. <br/>
      고양이와의 소중한 순간을 기억하며 행복한<br/>
      하루를 마무리했다.
      </Content>
    </DiaryContainer>
    </>
  )
}