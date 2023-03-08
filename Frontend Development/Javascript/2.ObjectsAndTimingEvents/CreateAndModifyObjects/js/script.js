// Create and Modify Objects
// Send Feedback
// Write a JavaScript program to:
// 1. Create a student object with three properties: name, age, and roll no.
// 2. Create an object address with two properties, City and state and add this object property to the student object.
// 3. Now delete the roll no property and print the object before and after deleting the property.
var student =
    {
        name:"Bharath",
        age: 25,
        rollno:109,
    	address :{
        	city:"Coimbatore",
        	state:"Tamilnadu"
    	}
    };
console.log(student);
delete student.rollno;
console.log(student);