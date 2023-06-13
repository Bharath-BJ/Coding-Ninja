// Any JS variable can be embedded in JSX by using curly braces as {variable_name}
// JSX can display only valid expression(anything resolved to value) like Number,String,Object properties,function with returned value & even JSX
// JSX cannot display invalid expressions like undefined, null, boolean 
const App = () => {

    const name = "Bharath";
    const details=<h3>Details given below</h3>
    const age = 25;
    const hobby = "JavaScript";
    const isMarried = false;
    const Null=null;
    const Undefined=undefined;
    
    return (
      <>
      <h1>{name}'s basic info:</h1>
      {details}
      <p>My age is {age}</p>
      <p>I like {hobby} a lot!</p>
      <p>Am i married?: {isMarried.toString()}</p>
      <p>Experience: {experience()}</p>
      <p>Null value: {Null}</p>
      <p>Undefined value: {Undefined}</p>
      </>
    );
  };
  function experience()
  {
        let BI=1.5,zoho=0.5;
        return BI+zoho;
  }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);