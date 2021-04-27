import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { loadTodos, removeTodoRequest } from "./thunks";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { displayAlert } from "./thunks";
import { markTodoAsCompleted, editTodo } from "./actions.js";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  onEditPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <h1>Loading todos...</h1>;
  const content = (
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
  return isLoading ? content : loadingMessage;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (text) => dispatch(markTodoAsCompleted(text)),
  onEditPressed: (text) => dispatch(editTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
