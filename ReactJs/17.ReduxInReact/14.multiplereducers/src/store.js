import { combineReducers } from "redux";

const redux = require("redux");
// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");
const {counterReducer} = require("./redux/reducers/counterReducer");


// combine the reducer functions here
const result= combineReducers({
    timerReducer,
    counterReducer
}); 

// add the root reducer function to store here
export const store = redux.createStore(result);
