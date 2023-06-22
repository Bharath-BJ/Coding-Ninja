/* Event related to input event handled by React Component - Controlled component
  Event related to input event handled by DOM itself using React.createRef()- Uncontrolled component
*/

//variable to store form's values.
var state = {value: ''};
//methods used on handling Events in JSX
function handleChange(event) {
  state  = {value: event.target.value};
}
function handleSubmit(event) {
  alert('A name was submitted: ' + state.value);
  event.preventDefault();
}
// created form in JSX
const Form = () =>{
return (
<form onSubmit={handleSubmit}>
<label>
Name:
<input type="text" onChange={handleChange} />
</label>
<input type="submit" value="Submit" />
</form>
);
}

const App=()=>  (
  <>
    <h1>Example for controlled component</h1>
    <Form/>
  </>
  );

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
