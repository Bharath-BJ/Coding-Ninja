
// action constants
const ADD_TODO = "Add todo";
const TOGGLE_TODO = "Toggle todo";

const addTodo = (text)=> {type:ADD_TODO,text};
const toggleTodo = (index)=> {type:TOGGLE_TODO,index};

export {addTodo,toggleTodo};