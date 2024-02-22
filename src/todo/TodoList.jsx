import styled from "styled-components";

const ListTextContainer = styled.div`
  width: 19rem;
  display: flex;
  margin-left: 1.56rem;
  margin-top: 1.12rem;
  position: relative;
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
  position: absolute;
  right: 0;
`

export default function TodoList({content, handleAddList}) {
  return (
    <ListTextContainer>
      <div>
        <RecommendList>{content}</RecommendList>
      </div>
      <AddList onClick={() => handleAddList(content)}>추가하기</AddList>
    </ListTextContainer>
  )
}