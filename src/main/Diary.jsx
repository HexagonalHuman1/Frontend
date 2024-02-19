import styled from "styled-components";

const SearchBar = styled.div`
  margin-top: 1.94rem;
  text-align: center;
`

export default function Diary() {
  return (
    <>
      <SearchBar>
        <input type="text" placeholder="내가 쓴 일기 검색하기" className="diarySearchBar" />
      </SearchBar>
    </>
  )
}