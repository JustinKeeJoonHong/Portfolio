import { useState, useRef } from "react";

const Addstate = ({ onClickEvent, stateId }) => {
  const [name, setName] = useState(""); // state는 값이 바뀌면 랜더링이 되지만
  const nameInput = useRef(null); // useRef는 값이 바뀌어도 랜더링이 되지 않음

  const onChangeInput = (e) => {
    console.log(e);
    // <input/> <-- HTML.target.value

    setName(e.target.value);
    // useState의 변수를바꿔주는 함수는 비동기 함수입니다.
    console.log(name);
    // 따라서 여기서 콘솔을 찍을 때는 지금 현재 바뀐값이 지정이 되지 않습니다.
  };

  const onAddStateHandler = () => {
    onClickEvent(stateId + 1, name);
    setName("");
  };

  const onReSetHandler = () => {
    setName("");
    nameInput.current.focus();
    // nameInput.current.style.display = "none";   / nameInput.curren = domselector.(input) 같은 말임
  };

  const onEnterAddState = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onClickEvent(stateId + 1, name);
      setName("");
      alert("값이 추가되었습니다");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        // 이벤트 객체를 받기 위해서는 이벤트함수속성 = {실행함수명} 으로 실행해야 함
        // 단, 이벤트객체 함수를 받지 않고, 두가지 이상의 함수를 실행하고자 할 때는
        // 이벤트함수속성 = { () => { 함수1(), 함수2()} } 으로 실행해야한다
        onChange={onChangeInput}
        // onchange = {()=> onChangeInput()}
        ref={nameInput}
        onKeyPress={onEnterAddState}
      />
      <button onClick={onAddStateHandler}>추가</button>
      <button onClick={onReSetHandler}>초기화</button>
    </>
  );
};
export default Addstate;
