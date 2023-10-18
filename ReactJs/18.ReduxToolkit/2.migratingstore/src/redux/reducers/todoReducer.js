
// import { ADD_TODO, TOGGLE_TODO, toggleTodo } from "../actions/todoActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

const todoSlice = createSlice({
    name:"todo",
    initialState:initialState,
    reducer:{
        addToDo:(state,action)=>{
        state.todos.push({text:action.payload,completed:false}); 
        },
        toggleTodo:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i==action.payload)
                    todo[i].completed=!todo[i].completed;
            return todo;
            })
        }
    }
});

export const todoReducer = todoSlice.reducer;
/*
export function todoReducer(state=initialState, action){

    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i)=>{
                    if(i===action.index){
                        todo.completed=!todo.completed
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}

*/