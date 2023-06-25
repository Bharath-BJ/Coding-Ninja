/*
Forms in JSX
Send Feedback
Create a React App that displays the student details .


In this App, you need to create a form which takes the name and marks obtained by the student as input. When the button is clicked then you have to insert that student's name and marks inside the table which should be below the Student form.



Make sure the entire page should not reload.
There are 2 components. Form and Result. You need to complete them.
Inside the Result component, there should be a table which will show all the students' name and marks.


Expected Output: Downloaded as Output
*/
let inputRef1=React.createRef();
let inputRef2=React.createRef();
let data=[];
const Form = () => <>
          <form onSubmit={handleSubmit}>
            <input ref={inputRef1} placeholder="Name"></input>
            <input ref={inputRef2} placeholder="Marks"></input>
            <button>Submit</button>
          </form>
        </>;
let handleSubmit=(event)=>{
  event.preventDefault();
  console.log(inputRef1.current.value,inputRef2.current.value);
  data.push({
    name:inputRef1.current.value,
    marks:inputRef2.current.value
  });
  inputRef1.current.value="";
  inputRef2.current.value="";
  root.render(<App/>);

}
const Result = () => {
  return(<>
      <table border='1'>
        <thead>
          <tr>
            <th>Student's Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem,index)=> <tr key={index}>
                                  <td>{elem.name}</td>
                                  <td>{elem.marks}</td>
                                  </tr>)}
        </tbody>
      </table>
  </>);
}

const App = () => (
  <>
    <h1>Student's Form</h1>
    <Form />
    <Result/>
  </>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);