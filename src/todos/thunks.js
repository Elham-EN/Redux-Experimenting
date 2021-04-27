import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
} from "./actions";

/*The function return here get two arguments when thunk is triggered
and they are dispatch(dispatch other redux actions from inside thunk)
and getState - get access to the current state of the redux store
export const loadTodos = () => async (dispatch, getState) => {
  try {
    //using dispatch to communicate to the rest of our application
    dispatch(loadTodosInProgress());
    //Make a request to the server
    const response = await fetch("https://localhost:8080/todos");
    const todos = await response.json();
    
    //Once we loaded our Todos from the server and put it into redux store
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    console.log();
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};
*/
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    //create request body that will be send to the server
    const body = JSON.stringify({ text });
    //Make this a post request
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    //got todo from the response
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
//Since server is now giving unique ID
export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
