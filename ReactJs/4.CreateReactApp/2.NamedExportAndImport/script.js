// We have two types of import and export to get access to piece of code in separate file
// 1. Named 2. Default 
// Named export can be done both inline or at the bottom 
// Named export can export more than one values so it is rule to wrap both the exporting and importing values 
// Named export does not support alias name in import file but can be employed using as key word

export let a=2
let b=4;
let greeting=()=> "Hello bro you there?"


export {b,greeting}



