import redux from "redux"
import todoReducer from "./reducers/todoReducer";

const store = redux.createStore(todoReducer);

export default store;