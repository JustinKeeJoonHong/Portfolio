import { useReducer, useCallback } from "react";
import { reducer } from "../reducer";

const Reducer = () => {
  const initialState = 0;
  const [number, dispatch] = useReducer(reducer, initialState);
  /* reducer폴더에있는 reducer 로직을 가져옴 , initialState는 그 밖에서 선언한 변수를 가져오고 number로 인해 그 변수를 가상돔이 인지할 수 있도록 
  state(상태)로 변환시켜줌 dispatch는 전달해주는 매개변수 즉 다시 reducer로 전달해줌 (action을 대체해줌)   */

  const onIncrement = useCallback(() => {
    dispatch({
      type: "INCREMENT" /* action으로 전달될 내용  */,
    });
  }, []);

  const onDecrement = useCallback(() => {
    dispatch({
      type: "DECREMENT",
    });
  }, []);

  return (
    <div>
      <p>{number}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
export default Reducer;

/* 
number와 dispatch는 비구조화할당으로 임의로 우리가 이름 붙일 수 있음
useReducer(내가 만든 reducer로직 , 밖에 로직을 관리할 변수)
==>   변수를 스테이트로 변환

리턴 값으로
[변환 받을 스테이트명, dispatch]
dispatch = 전달 매개체 action값(reducer에 데이터) 전달
*/
