import styled from "styled-components";

const ListTextContainer = styled.div`
  display: flex;
  gap: 9.38rem;
  margin-left: 1.56rem;
  margin-top: 1.12rem;
`

const RecommendList = styled.p`
  color: #DD8EA4;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

const AddList = styled.p`
  color: #DD8EA4;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  margin: 0;
`

export default function TodoList({content}) {
  return (
    <ListTextContainer>
      <RecommendList>{content}</RecommendList>
      <AddList>추가하기</AddList>
    </ListTextContainer>
  )
}