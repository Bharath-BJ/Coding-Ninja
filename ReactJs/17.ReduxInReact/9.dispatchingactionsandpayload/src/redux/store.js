import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const store = createStore(todoReducer);

export default store;