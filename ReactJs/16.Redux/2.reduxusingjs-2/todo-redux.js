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


// Using the switch case we handle the different state modification operations inside the reducer functions 