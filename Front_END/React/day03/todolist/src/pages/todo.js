import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

// 컴포넌트의 시작명은 대문자 (이유는 훅 함수가 사용되기 위해서)
const Todo = () => {
  return (
    <>
      <TodoTitle />
      <TodoForm />
      <TodoList /> {/* 컴포넌트들.. */}
    </>
  );
};
export default Todo;

/* 
const 컴포넌트명 = () => {
    return(
        ...
    )
}
export default 컴포넌트명
*/

/* page에는 컴포넌트들을 합침 */
