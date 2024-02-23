import { useState } from "react";
import styled, {css} from "styled-components";

const DateTextContainer = styled.div`
  margin: 0 auto;
  margin-top: 0.94rem;
  display: flex;
  justify-content: space-evenly;
  gap: 8.25rem;
`;

const DateText = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const WeekendContainer = styled.div`
  width: 19rem;
  height: 2.59375rem;
  flex-shrink: 0;
  margin: 0 auto;
  margin-top: 1.87rem;
  display: flex;
  gap: 1.78rem;
`;

const DateContainer = styled.div`
  width: 1.1875rem;
  height: 2.51563rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.39rem;
`;

const DayText = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  ${(props) =>
    props.weekend &&
    css`
      color: ${(props) => (props.saturday ? "#6E9DF8" : "#FF9090")};
    `}
`;

const DateActiveBox = styled.div`
  width: 1.1875rem;
  height: 1.1875rem;
  border-radius: 0.9375rem;
  background: ${(props) => props.divIndex && props.active ? "#FFB9B9" : "#D2D2D2"};
  border: none;
`

export default function TodoDate({active}) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDay();
  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const colorActive = localStorage.getItem("color");

  return (
    <>
      <DateTextContainer>
        <DateText>
          &lt; {currentYear}년 {currentMonth}월 기록 &gt;
        </DateText>
        <button
          style={{ border: "none", background: "inherit", cursor: "pointer" }}
        >
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "0.75rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            월별로 보기
          </p>
        </button>
      </DateTextContainer>
      <WeekendContainer>
        {days.map((day, index) => {
          return (
            <DateContainer key={index}>
              <DayText
                weekend={index === 5 || index === 6}
                saturday={index === 5}
              >
                {day}
              </DayText>
              <DateActiveBox
                active={active && colorActive}
                divIndex={currentDate === index+1}
              />
            </DateContainer>
          );
        })}
      </WeekendContainer>
    </>
  );
}
