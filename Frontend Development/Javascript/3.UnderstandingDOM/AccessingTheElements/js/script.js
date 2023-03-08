// Accessing Elements
// Send Feedback
// In this HTML file, we have many elements that we will access with different document methods. When we render the file in a browser, it will look similar to this:
// in output images

// 1. Now you have to access a single element in the DOM by its unique ID and change the border property to green.
// 2. We have two elements with a demo class in the given file. Access elements and put them in a variable. for accessing the element you can't use getElementsByClassName.
// 3. You have now selected every element on the page that has a demo class and changed the border property to blue.
// 4. You must change the second text element to "Second Elements of Class".
// Expected Output: in output images 



// For some reason it is not working properly 
var id=document.getElementById("demo");
// id.style.borderColor="blue";
var classElements=document.getElementsByClassName("demo");
for(let i=0;i<classElements.length;i++)
{
    classElements[i].style.borderColor="green";
}