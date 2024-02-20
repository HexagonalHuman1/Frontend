import styled from "styled-components";

const TitleText = styled.p`
  color: #DD8EA4;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.56rem;
`  

export default function CreateDairy() {
  return (
    <TitleText>일기 작성</TitleText>
  )
}