// define action constants here
const START_TIMER="Start timer";
const PAUSE_TIMER="Pause timer";
const RESET_TIMER="Reset timer";
const INCREMENT_TIMER= "Increment timer";

// define action creators here
const startTimer=()=>({type:START_TIMER});
const pauseTimer=()=>({type:PAUSE_TIMER});
const resetTimer=()=>({type:RESET_TIMER});
const incrementTimer=()=>({type:INCREMENT_TIMER});


export {START_TIMER,PAUSE_TIMER,RESET_TIMER,INCREMENT_TIMER,startTimer,pauseTimer,resetTimer,incrementTimer};