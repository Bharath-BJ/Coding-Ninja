// Create element using javascript
const heading1=document.createElement("h2");
heading1.className="heading1";
heading1.innerText="Heading1 using React!!";
document.getElementById("root").append(heading1);
console.log("Using javascript :");
console.log(heading1);  // Here h2 tag is printed


// Create element using React component method  
// 1)createElement(type,attribute obj,children attribute or innerContent);
// 2)createRoot(Html element where to render)
// 3)render(component to render)
const heading2=React.createElement("h2",{className:"heading2"},"Heading2 using React!!");
const heading3=React.createElement("h2",{className:"heading3",children:"Heading3 using React!!"}); // We can also give children attribute directly 
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2); // While rendering it replaces all the children that already exists 
console.log("Using react :");
console.log(heading2); // Here objects with the properties like props, type will be printed
