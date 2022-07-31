import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INSERT_TODO } from "../reducer/todo";

const TodoForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  /* _index.js에 있는 state들 중에서 todo의 state를 가져오는 것 
  제일 큰 index.js에서 store를 통해 전달이 되었기 때문에 useSelector 기능이 작동 됨 
  
  rootReducer 설정 (reducer들을 combine)
  => 리덕스 설정에서 store에 매개변수로 전달 (저장소에 저장)
  => Provider에 store를 전달
  => useSelector( (state) <--- 결과값이 reducer에서 만든 모든 state들이 전달되고
  그 중에서 하위 선택자를 이용해서 내가 원하는 reducer의 state를 가지고 올 수 있다.
  */
  useEffect(() => {
    console.log(state);
  }, []);

  const [todo, setTodo] = useState("");

  const onAddState = useCallback(() => {
    dispatch({
      type: INSERT_TODO,
      data: {
        id: state[state.length - 1].id + 1,
        todo: todo,
      },
    });
    setTodo("");
  }, []);

  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );

  return (
    <div>
      <TodoaddInput
        type="text"
        value={todo}
        onChange={onChangeTodo}
        placeholder="할 일을 적어주세요"
      />
      <TodoButton onClick={onAddState}>추가</TodoButton>
    </div>
  );
};
export default TodoForm;

const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
  position: relative;
  padding-left: 20px;
`;
const TodoButton = styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  position: absolute;
`;
