
// actions constants
const ADD_NOTE="Add Note";
const DELETE_NOTE="Delete Note";

// action creators
const addNote=(text)=>{type:ADD_NOTE,text};
const deleteNote=(index)=>{type:DELETE_NOTE,index};

export {ADD_NOTE,DELETE_NOTE,addNote,deleteNote};