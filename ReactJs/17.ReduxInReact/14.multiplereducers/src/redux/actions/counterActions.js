// define counter action constants here
const DECREMENT_COUNT="Decrement Count";
const INCREMENT_COUNT="Increment Count";
const RESET_COUNT="Reset Count";

// define counter action creators here
const decrementCount=()=>({type:DECREMENT_COUNT});
const incrementCount=()=>({type:INCREMENT_COUNT});
const resetCount=()=>({type:RESET_COUNT});

export {DECREMENT_COUNT,INCREMENT_COUNT,RESET_COUNT,decrementCount,incrementCount,resetCount};