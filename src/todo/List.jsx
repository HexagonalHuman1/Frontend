import { useState } from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 19.40981rem;
  height: 1.13731rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
`

const CheckBox = styled.div`
  width: 1.0615rem;
  height: 1.0615rem;
  flex-shrink: 0;
  border: none;
  border-radius: 0.9375rem;
  background: ${(props) => props.active ? "#FFB9B9" : "#D2D2D2"};
  cursor: pointer;
  position: absolute;
  left: 0;
`

const ListContent = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-left: 1.5rem;
`

const DeleteText = styled.p`
  color: #000;
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

export default function List({item, handleDeleteList}) {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    setComplete(!complete);
  }
  return (
    <ListContainer>
      <CheckBox onClick={handleComplete} active={complete} />
      <ListContent>{item}</ListContent>
      <DeleteText onClick={() => handleDeleteList(item)}>삭제</DeleteText>
    </ListContainer>
  )
}