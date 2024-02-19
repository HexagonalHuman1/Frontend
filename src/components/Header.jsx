import styled from "styled-components";

const MainHeader = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-top: 1.56rem;
  margin-bottom: 0.94rem;
`

const NoticeBox = styled.div`
  background: #FEDD89;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.62rem 0;
  padding-left: 1.12rem; 
`
const NoticeMainText = styled.p`
  margin: 0;
  color: #000;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const NoticeSubText = styled.p`
  margin: 0;
  color: #000;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export default function Header() {
  return (
    <>
      <div>
        <MainHeader>user님의 쉼</MainHeader>
      </div>
      <NoticeBox>
        <NoticeMainText>공지사항</NoticeMainText>
        <NoticeSubText>서브 텍스트가 들어가는 자리입니다.<br/>또는 제휴사 배너가 등장할 수 있습니다.</NoticeSubText>
      </NoticeBox>
    </>
  )
}