// Property Exists
// Send Feedback
// Implement a function propertyExists(obj, path) that takes two arguments - an object and a path (string). It returns ‘False’ if the property is null or it doesn’t exist for that object, otherwise it will return the value of the property for that object.
// Note: Properties can have single character only. So, path can be a string with concatenation of many properties.
// Sample Input :
// 1  {"a":{"b":"dadsa"}} ac
// Expected Output :
// false
// Sample Input :
// 2
// {"a":{"b":"dadsa"}} ac
// {"a":{"b":"dadsa"}} ab
// Expected Output :
// false
// dadsa
// there is two ways to approach this problem, if true either we get the Value the property or else print true
function propertyExists1(obj, path) {
    var pathSoFar;
    var result=findPropPath1(obj,pathSoFar,path);
    console.log(result);
    if(result)
        return true;
    else
        return false;
}
function findPropPath1(obj,pathSoFar,path) {
  for (var prop in obj) {
    if (prop == path) {
      return prop;
    } else if (typeof obj[prop] == "object") {
      var result = findPropPath1(obj[prop], pathSoFar+prop,path.slice(1));
      if (result) {
        return prop + result;
      }
    }
  }
  return null;    // Not strictly needed, but good style
}

function propertyExists2(obj, path) {
    var pathSoFar;
    var result = findPropPath2(obj, pathSoFar, path);
    console.log(result);
    if (result)
      return result;
    else
      return false;
  }
  function findPropPath2(obj, pathSoFar, path) {
    for (var prop in obj) {
      if (prop == path) {
        return obj[prop];
      } else if (typeof obj[prop] == "object") {
        var result = findPropPath2(obj[prop], pathSoFar + prop, path.slice(1));
        if (result) {
          return result;
        }
      }
    }
    return null;    // Not strictly needed, but good style
  }
  
const obj= {"a":{"b":"dadsa"}};
var path= "ab";
console.log(propertyExists1(obj,path));
console.log(propertyExists2(obj,path));