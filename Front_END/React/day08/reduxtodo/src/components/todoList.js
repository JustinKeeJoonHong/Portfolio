import { useEffect } from "react";

const TodoList = ({ state }) => {
  useEffect(() => {
    console.log(state);
  });

  return (
    <div>
      {state.id}.{state.todo} <button>완료</button>
    </div>
  );
};
export default TodoList;
