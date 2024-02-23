import { useState } from "react";
import styled from "styled-components";

const MainHeader = styled.p`
  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-top: 1.56rem;
  padding-bottom: 0.94rem;
`

const NoticeBox = styled.img`
  width : 350px;
`

export default function Header() {
  const [userName, setUserName] = useState("제준");
  return (
    <>
      <div>
        <MainHeader>{userName}님의 쉼</MainHeader>
      </div>
      <NoticeBox src ="img/logo.png">
      </NoticeBox>
    </>
  )
}