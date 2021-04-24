import React, { useState } from "react";
import "./TodoListItem.css";
import { Input } from "./Input.component";

const TodoListItem = ({
  todo,
  onRemovePressed,
  onCompletePressed,
  onEditPressed,
}) => {
  const [editValue, setEditValue] = useState(todo.text);
  const [clickEdit, setClickEdit] = useState(true);
  todo.text = editValue;
  console.log(clickEdit);
  console.log(editValue);
  return (
    <div className="todo-item-container">
      <h3>{editValue}</h3>
      {clickEdit ? null : (
        <div>
          {clickEdit ? null : (
            <button
              onClick={() => {
                onEditPressed(editValue);
                setClickEdit(true);
              }}
            >
              Save
            </button>
          )}
          <Input editValue={editValue} setEditValue={setEditValue} />
        </div>
      )}

      <div className="buttons-container">
        {todo.isCompleted ? null : (
          <button
            className="completed-button"
            onClick={() => {
              onCompletePressed(editValue);
            }}
          >
            Mark As Completed
          </button>
        )}
        <button
          className="remove-button"
          onClick={() => {
            onRemovePressed(editValue);
          }}
        >
          Remove
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setClickEdit(false);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
