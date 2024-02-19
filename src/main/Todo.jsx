import pinkDot from "../img/pinkDot.svg";

export default function ToDo() {
  return (
    <>
      <div>
        
      </div>
      <div className="addToDoButtonBox">
        <img src={pinkDot} alt="pinkDot" style={{position: "absolute", left: "0.94rem"}} />
        <button className="addToDoButton">할 일 목록 추가하기</button>
      </div>
    </>
  )
}