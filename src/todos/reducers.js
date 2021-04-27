import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  EDIT_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

//To keep track of whether our todos is loading or not
export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    //Just started loading
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
      return true;
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  //get the properties from the action that reducer got called with.
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      //only want text property not equal the text property we got from payload
      console.log("todoToRemove:", todoToRemove);

      return state.filter((todo) => todo.id !== todoToRemove.id);
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
        return { ...todo, text };
      });
    }
    case LOAD_TODOS_SUCCESS: {
      //Get todos from the server
      const { todos } = payload;
      //Return as a new state
      return todos;
    }

    default:
      return state;
  }
};
