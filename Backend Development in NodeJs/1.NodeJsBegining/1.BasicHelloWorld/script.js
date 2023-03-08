console.log("Hello World!!");
function add(x,y)
{
    return x+y;
}
console.log(add(2,3));

// process is an inbuilt object that looks over the complete environment where node is running
// It first catches directory of node, node file as two arguments then takes the input into the array
// node script.js 4 5 here 4 & 5 are included to the process array 
console.log(process.argv);
var args=process.argv.slice(2);
console.log("Adding the Numbers:",add(parseInt(args[0]),parseInt(args[1])));