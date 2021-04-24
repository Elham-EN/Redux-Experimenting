import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({ todos = [{ text: "Hello" }, { text: "Hello2" }] }) => {
  console.log(todos);
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => {
        console.log(todo, index);
        return <TodoListItem key={index} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
