import { useState, useCallback } from "react";
import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

const Todo = () => {
  const [state, setState] = useState([
    {
      id: 1,
      Todo: "리엑트 공부하기",
    },
    {
      id: 2,
      Todo: "리엑트 또 공부하기",
    },
  ]);

  const onAddHandler = useCallback(
    (id, todo) => {
      setState([...state, { id: id, Todo: todo }]);
    },
    [state]
  );

  const onRemoveHandler = useCallback(
    (id) => {
      const removeState = state.filter((item) => item.id !== id);
      setState(removeState);
    },
    [state]
  );
  return (
    <>
      <TodoTitle state={state} />
      <TodoForm
        onAddHandler={onAddHandler}
        id={state.length > 0 && state[state.length - 1].id}
      />
      {state.map((v) => (
        <TodoList onRemoveHandler={onRemoveHandler} key={v.id} state={v} />
      ))}
    </>
  );
};
export default Todo;
