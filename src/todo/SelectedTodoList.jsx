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

const DeleteList = styled.p`
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

export default function TodoList({content, handleDeleteList}) {
  return (
    <ListTextContainer>
      <div>
        <RecommendList>{content}</RecommendList>
      </div>
      <DeleteList onClick={() => handleDeleteList(content)}>삭제하기</DeleteList>
    </ListTextContainer>
  )
}