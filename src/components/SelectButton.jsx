import styled from "styled-components";
import radioButton from "../img/radioButton.svg";
import activeRadioButton from "../img/activeRadioButton.svg";
import { useState } from "react";

const DateText = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-left: 0.81rem;
  margin-right: 1.25rem;
`;

const SelectDate = styled.select`
  width: 6.75rem;
  height: 1.5625rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #dd8ea4;
  text-align: center;
`;

export default function SelectButton() {
  const [month, setMonth] = useState(false);
  const [week, setWeek] = useState(false);

  function activeMonth() {
    setMonth(!month);
  }

  function activeWeek() {
    setWeek(!week);
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <SelectDate>
          <option>1달</option>
          <option>2달</option>
          <option>3달</option>
          <option>4달</option>
          <option>5달</option>
          <option>6달</option>
          <option>7달</option>
          <option>8달</option>
          <option>9달</option>
          <option>10달</option>
          <option>11달</option>
          <option>12달</option>
        </SelectDate>
        <DateText>동안 도전할래요</DateText>
        <img
          src={month ? activeRadioButton : radioButton}
          alt="buttonImg"
          onClick={activeMonth}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: "0.81rem" }}>
        <SelectDate>
          <option>1주</option>
          <option>2주</option>
          <option>3주</option>
          <option>4주</option>
          <option>5주</option>
        </SelectDate>
        <DateText>동안 도전할래요</DateText>
        <img
          src={week ? activeRadioButton : radioButton}
          alt="buttonImg"
          onClick={activeWeek}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}
