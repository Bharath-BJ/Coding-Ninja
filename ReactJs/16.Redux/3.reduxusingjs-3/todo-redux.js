// importing the redux library 
const redux= require("redux");

// Actions
const ADD_TODO = "Add todo";
const TOGGLE_TODO =  "Toggle todo";

// Action Creators
let addTodo= (text)=> {type:ADD_TODO,text};
let toggleTodo= (index)=> {type:TOGGLE_TODO,index};

// Default initial state
let initialState={ 
    todos:[]
};

// Reducer Function
let todoReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TODO:
        {
            return{
            ...state,
            todos:[...state.todos,
                {
                    text:action.text,
                    completed:false
                }
                ]
            };
        }
        case TOGGLE_TODO:
        {
            return{
                ...state,
                todos:state.todos.map((todo,i)=>{ 
                    if(i=== action.index)
                        todo.completed=!todo.completed;
                    return todo;
                })
            }
        }
        default:
            return state;
    }
}


// Use redux
let store= redux.createStore(todoReducer);

// dispatch actions
store.dispatch(addTodo("Morning workout"));
store.dispatch(addTodo("Meditate"));
store.dispatch(toggleTodo(1));

// get the values from store
console.log(store.getState());

/*  Now having the reducer function for state modification
    We use deprecated createStore(reducer) function to create the store (To understand the redux in a raw level)
    Then  we can use dispatch() to modify the app state and getState() to get the values from the app state
 * 
 */