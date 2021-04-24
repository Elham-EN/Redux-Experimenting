import { createStore, combineReducers } from "redux";
import { todos } from "./todos/reducers";

//put all reducer
const reducers = { todos };

//put reducers in a form tat we can pass to the createStore
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
