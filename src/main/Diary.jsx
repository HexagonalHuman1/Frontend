import styled from "styled-components";
import searchImg from "../img/searchImg.png";
import addDiaryImg from "../img/addDiary.svg";

const SearchBar = styled.div`
  margin-top: 1.94rem;
  text-align: center;
  position: relative;
`;

const AddDiaryButton = styled.div`
  text-align: center;
  margin-top: 1.2rem;
`;

const MonthRecord = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export default function Diary() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  return (
    <>
      <SearchBar>
        <input
          type="text"
          placeholder="내가 쓴 일기 검색하기"
          className="diarySearchBar"
        />
        <button className="searchImgButton">
          <img src={searchImg} alt="searchImg" />
        </button>
      </SearchBar>
      <AddDiaryButton>
        <img src={addDiaryImg} alt="addDiaryImg" style={{cursor: "pointer"}} />
      </AddDiaryButton>
      <MonthRecord>&lt; {currentYear}년 {currentMonth}월 기록 &gt;</MonthRecord>
    </>
  );
}
