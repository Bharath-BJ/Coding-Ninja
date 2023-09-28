import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";


const initialState={
    todos:[
        {id:1,text:"Wakeup @ 4am",completed:true},
        {id:2,text:"Workout @ 7.30am", completed:true}
    ]
}


const todoReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TODO:
        {
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id: state.todos.length+1,
                        text:action.text,
                        completed:false
                    }
                ]
            }
        }
        case TOGGLE_TODO:
        {
            return {
                ...state,
                todos: state.todos.map((todo,i)=>{
                    if(i===action.index)
                        todo.completed=!todo.completed;
                return todo;
                })
            }
        }
        default:
            return state;
    }

}

export default todoReducer;