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
        case TOGGLE_TODO:
        default:
            return state;
    }
}



/*  Though we have Context API for state management, there are few reasons why we needed redux to replace context API 
    1) Overuse of Context - Frequent communication b/w component and context can lead to performance issues
    2) Custom made for static content - So for dynamic content context API was not well suited
    3) Re-rendering the context consumers
    4) Difficult to debug
    5) Difficult to extend and debug

    Currying in js - Converting the multi-parameter single function into multiple single parameter function with the closure principle 

    Working of Redux:
    Here as per the Flux architecture of redux(refer online)
    React component can get the app state values from the store directly 
    whereas component can modify the app state only through action--> reducer--> store
    So here firstly we create global variables for actions then action creator functions
    Then we created reducer function that uses switch cases to handle different state modification
 */