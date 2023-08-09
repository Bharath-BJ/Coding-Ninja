import Student from "./Student.js"


function App() {
  return (
    <>
      <Student name="Bharath" subject="JS"/>
    </>
  );
}

export default App;

// So to make dynamic state content in child component, we can pass the content from the parent to children as props
// While passing the component we can pass the props like HTML attributes
// In the Receiver side,
// Class component has props object by default, can access using this.props
// Funtional component receives props as Object parameter  
// In both cases, props can be destructured for our ease of coding
