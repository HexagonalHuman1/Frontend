import styled from "styled-components";
import pinkRadioImg from "../img/activeRadioButton.svg";

const ChoiceListContainer = styled.div`
  width: 15rem;
  height: 1.5625rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
`

const ChoiceContent = styled.p`
  color: #DD8EA4;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

export default function ChoiceList() {
  return (
    <ChoiceListContainer>
      <ChoiceContent></ChoiceContent>
      <img src={pinkRadioImg} alt="pinkRadioImg" style={{position: "absolute", right: "0"}} />
    </ChoiceListContainer>
  )
}