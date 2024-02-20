import styled from "styled-components";
import SelectButton from "./SelectButton";

const SelectText = styled.p`
  color: #DD8EA4;
  text-align: center;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.75rem;
  margin-top: 3.13rem;
`

export default function SelectDate() {
  return (
    <>
      <SelectText>진행 기간 선택하기</SelectText>
      <div style={{width: "80%", height: "0.0625rem", background: "#DD8EA4", margin: "0 auto"}} />
      <div style={{margin: "0 auto"}}>
        <SelectButton />
      </div>
    </>
  )
}