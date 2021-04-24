import React from "react";
import "./NewTodoForm.css";

export const Input = ({ editValue, setEditValue }) => (
  <input
    className="new-todo-input"
    type="text"
    placeholder="Type your new todo here"
    value={editValue}
    onChange={(event) => setEditValue(event.target.value)}
  />
);
