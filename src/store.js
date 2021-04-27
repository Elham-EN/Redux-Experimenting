import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Need these objects to make our redux store persist
import { persistReducer } from "redux-persist";
//Default local storage to web
import storage from "redux-persist/lib/storage";
//tell redux persist how to reconcile/integrate the initial and stored
//states of our application, as in how deep should it go when doing so
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos, isLoading } from "./todos/reducers";

//put all reducer
const reducers = { todos, isLoading };

//persistConfig object tells Redux persist, how to save and where to
//store our application data
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

//put reducers in a form tat we can pass to the createStore
const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
