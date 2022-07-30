const TodoList = ({ onRemoveHandler, state }) => {
  const onRemoveclick = () => {
    onRemoveHandler(state.id);
  };

  return (
    <div>
      {state.id}.{state.Todo} <button onClick={onRemoveclick}>완료</button>
    </div>
  );
};
export default TodoList;
