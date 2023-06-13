// Any JS variable can be embedded in JSX by using curly braces as {variable_name}
// JSX can display only valid expression(anything resolved to value) like Number,String,Object properties,function with returned value & even JSX 
// JSX cannot display invalid expressions like undefined, null, boolean 
const App = () => {

    const name = "Bharath";
    const age = 25;
    const hobby = "JavaScript";
    const isMarried = false;

    return (
      <>
      <h1>{name}'s basic info:</h1>
      <p>My age is {age}</p>
      <p>I like {hobby} a lot!</p>
      <p>Am i married?: {isMarried}</p>
      </>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);