import styled from "styled-components";

const DiaryContainer = styled.div`
  width: 20.6875rem;
  height: 20.125rem;
  flex-shrink: 0;
  border-radius: 1.4375rem;
  border: 1px solid #D2D2D2;
  background: #FFF;
  positeion: relative;
  margin: 0 auto;
  margin-top: 0.44rem;
`

const DiaryText = styled.p`
  margin-top: 1.22rem;
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
  margin-top: 0.5rem;
  text-align: center;
`

export default function WrittenDiary() {
  return (
    <DiaryContainer>
      <DiaryText>사용자가 설정한 제목</DiaryText>
      <WrittenDate>사용자가 작성한 날짜</WrittenDate>
    </DiaryContainer>
  )
}