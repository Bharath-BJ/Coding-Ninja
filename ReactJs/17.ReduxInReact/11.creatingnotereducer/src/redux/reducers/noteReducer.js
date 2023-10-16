import { ADD_NOTE,DELETE_NOTE } from "../actions/noteActions";

// initial state
const initialState={
    notes:[
        {text:"What's happening broo",createdOn:new Date()},
        {text:"Enna panra macha",createdOn:new Date()}
    ]
};

export const noteReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_NOTE:
            return {
            ...state,
            notes:[
                ...state.notes,
                {text:action.text,createdOn:new Date()}
            ]
            };
        case DELETE_NOTE:
            state.notes.splice(action.index,1);
            return {
            ...state,
            notes:[...state.notes]
            };
        default:
            return state
    }

}
