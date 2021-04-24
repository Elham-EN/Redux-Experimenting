export const CREATE_TODO = "CREATE_TODO";
//Return an object
export const createTodo = (text) => ({
  type: CREATE_TODO,
  //payload is an object with property text
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

//Next Step is to give the components in the application
//access to the Redux store, so that they can see the current
//state is and as well as trigger actions that modify the state.
