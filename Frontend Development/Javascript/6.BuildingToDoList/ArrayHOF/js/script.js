// Array HOFs
// Send Feedback
// Complete a function modifyArray() which takes an array of integers and returns an array of elements. The result array will contain the double of all the positive elements of the input array and all the negative elements will be removed(including 0). Higher order array methods should be used to achieve the following. Remove any element which is not a number. The operations should be stable.
// modifyArray([1,2,-1,undefined,0,7]) // Returns [2,4,14]
function modifyArray(arr) {
    arr = arr.filter((item) => {
        if(typeof item!="number") 
            return false;
        return item > 0 });
    arr = arr.map(item => 2 * item);
    return arr;
}


var arr= [-1,undefined,4,-4,5];
console.log(modifyArray(arr));