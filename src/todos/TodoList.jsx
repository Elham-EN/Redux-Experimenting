import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo } from "./actions.js";

const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            todo={todo}
            onRemovePressed={onRemovePressed}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
