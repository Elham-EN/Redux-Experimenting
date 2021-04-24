import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  EDIT_TODO,
} from "./actions";

export const todos = (state = [], action) => {
  //get the properties from the action that reducer got called with.
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      //only want text property not equal the text property we got from payload

      return state.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    case EDIT_TODO: {
      const { text } = payload;
      return state.map((todo) => {
        console.log("todo: ", todo);
        return { ...todo, text };
      });
    }

    default:
      return state;
  }
};
