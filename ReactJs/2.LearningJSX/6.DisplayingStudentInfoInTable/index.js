/* 
JS-IN-JSX
Send Feedback
Using the variables helps us in updating the content/code more efficiently. Use the given data to render on the screen. Make sure that the output matches the expected output image.


Note: You have to use the paragraph tags for rendering data in the component and the H1 tag for the heading.


Expected Output: Downloaded as image


Hint: (click to expand)
To display a boolean value you can use the  .toString() method on the variable to convert it into a string.
*/

const App = () => {
const arr=[{name:"Bharath",
            age:25,
            marks:83},
          { name:"Vignesh",
            age:29,
            marks:90},
          { name:"Yogesh",
            age:28,
            marks:95}];
  const listItems=arr.map((elem,index)=> (<tr key={index}> 
                                      <td>{elem.name}</td> 
                                      <td>{elem.age}</td> 
                                      <td>{elem.marks}</td> 
                                    </tr>)  ) 
  
  return (
    <>
      <h1>Student Report card</h1>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
          </tr>  
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);