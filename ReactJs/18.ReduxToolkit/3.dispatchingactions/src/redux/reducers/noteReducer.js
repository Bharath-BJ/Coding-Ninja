
// import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notes:[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'
    , createdOn: new Date()},
    {text:'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.'
    , createdOn: new Date()}]
};

const noteSlice= createSlice({
    name:"notes",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.notes.push({text:action.payload,createdOn:new Date()});
        },
        delete:(state,action)=>{
            state.notes.splice(action.payload,1);
        }
    }
});

const noteReducer=noteSlice.reducer;
const actions = noteSlice.actions;

export {noteReducer,actions};

/*
export function noteReducer(state=initialState, action){

    switch(action.type){
        case ADD_NOTE:
            return {
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text:action.text,
                        createdOn: new Date()
                    }
                ]
            }
        case DELETE_NOTE:
            state.notes.splice(action.index,1);
            return{
                ...state,
                notes: [...state.notes]
            }
        default:
            return state;
    }
}

*/