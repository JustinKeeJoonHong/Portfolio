import { useState, useCallback } from "react";
import TodoTitle from "../components/todoTitle";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";
import { useSelector } from "react-redux";

const Todo = () => {
  const state = useSelector((state) => state.todo);
  return (
    <>
      <TodoTitle state={state} />
      <TodoForm id={state.length > 0 && state[state.length - 1].id} />
      {state.map((v) => (
        <TodoList key={v.id} state={v} />
      ))}
    </>
  );
};
export default Todo;
