import React, { useState } from "react";
import { connect } from "react-redux";
//Importing thunk
import { addTodoRequest } from "./thunks";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          //Prevent user entering duplicate text
          //if already todo that contains this text
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (inputValue === "") {
            return alert("Cannot Create empty todo list :-(");
          } else if (!isDuplicateText) {
            onCreatePressed(inputValue);
            //clear the content with empty string
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

//Connect our component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

//state object - represent the entire Redux state. To take the
//state object and return another object containing the pieces
//of that state that our components needs access to.
//NewTodoFrom new version from the connect function will now
//automatically get the todos property and passed as props

//This function similarly work as mapStateToProps - the property
//of objects to be returned and passed to the component as props
//dispatch is a function that allows component to trigger actions
//that Redux store will respond to.
//This property is a function
