// We have two types of import and export to get access to piece of code in separate file
// 1. Named 2. Default 
// Named export can be done both inline or at the bottom 
// Named export can export more than one values so it is rule to wrap both the exporting and importing values 
// Named export does not support alias name in import file but can be employed using as key word
// Default export can also be done both inline or at the bottom 
// Default export can export only one value so it is there is no rule to wrap the single value export
// Default export support alias name in import file 
// We can combine both named and default exports

export let a=5
let b=10;
let greeting=()=> "Hello bro you there?"


export {b as default,greeting}
// here using 'as' keyword we have converted named to default export so it has to be used ouside of curly braces in import file



