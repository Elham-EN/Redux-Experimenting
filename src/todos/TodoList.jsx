import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo, markTodoAsCompleted, editTodo } from "./actions.js";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  onEditPressed,
}) => {
  /** where can i chat with you?
   *
   */
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletePressed={onCompletePressed}
            onEditPressed={onEditPressed}
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
  onCompletePressed: (text) => dispatch(markTodoAsCompleted(text)),
  onEditPressed: (text) => dispatch(editTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
