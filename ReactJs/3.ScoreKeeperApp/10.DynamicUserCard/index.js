/*Dynamic User Card
Send Feedback
Create a React app that renders a dynamic user card with form inputs.


Note: Styles are applied by default with className selector.

 When user types in the input and textarea elements it should be rendered dynamically in the Card component.


Expected Output: Downloaded as Output

Hint (click to expand)
Use the onChange event.
*/

// We can also solve this problem using React.createRef() by taking the value of input when onChange event trigerred
// But till this point createRef lecture was not over
let Name="";
let email="";
let about="";
const Card = () => (
    <div className="card">
      <h3>Name: {Name}</h3>
      <p>Email: {email}</p>
      <p>About: {about}</p>
    </div>
  );

  const App = () => (
    <div className="App">
        <Card/>
      <div className="inputs">
        <input placeholder="Name" onChange={handleNameChange}/>
        <input 
        type="email" placeholder="Email" onChange={handleEmailChange}/>
        <textarea placeholder="About" onChange={handleAboutChange}></textarea>
      </div>
    </div>
  );
  const handleNameChange = (e) => {
    Name = e.target.value;
    rootElement.render(<App />);
  };
  const handleEmailChange = (e) => {
    email = e.target.value;
    rootElement.render(<App />);
  };
  const handleAboutChange = (e) => {
    about = e.target.value;
    rootElement.render(<App />);
  };


const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);