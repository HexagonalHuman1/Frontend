import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: #FFF;
`

const TextContainer = styled.div`
  display: flex;
  width: 14.4375rem;
  padding: 0.6875rem 0rem 0.875rem 0rem;
  justify-content: center;
  align-items: center;
`

const ModifyText = styled.p`
  margin: 0;
  color: #6F41BB;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`

const DeleteText = styled.p`
  margin: 0;
  color: #CA3039;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`

const CancelText = styled.p`
  margin: 0;
  color: #000;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`

export default function ModifyModal({handleCloseEdit}) {
  return (
    <ModalContainer>
      <TextContainer><ModifyText>수정하기</ModifyText></TextContainer>
      <div style={{background: "#919191", width: "14.4375rem" ,height: "0.0625rem"}}></div>
      <TextContainer><DeleteText>삭제하기</DeleteText></TextContainer>
      <div style={{background: "#919191", width: "14.4375rem" ,height: "0.0625rem"}}></div>
      <TextContainer><CancelText onClick={handleCloseEdit}>취소</CancelText></TextContainer>
    </ModalContainer>
  )
}