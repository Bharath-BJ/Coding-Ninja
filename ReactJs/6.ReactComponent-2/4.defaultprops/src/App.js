import Student from "./Student";
import propTypes from "prop-types"

function App() {
  Student.propTypes={
    name:propTypes.string,
    subject: propTypes.string,
    info: propTypes.object
  }
  Student.defaultProps={
    subject:"Java",
    info:{
      since:1995,
      motto:"cryto is the future"
    }
  }
  return (
    <>
      <Student name={2} info={{since:1999}} />
    </>
  );
}

export default App;


// Initially props object is undefined, when we pass content as attribute then properties of props obj is created
// If at all expected values are not passed from parent component it will undefined in child component
// For this reason, We can also populate the props beforehand by default values using defaultProps Obj
// Note 1: when same default value's key are passed from parent component, then default values will be overwritten
// Note 2: Unlike state of a component props are immutable inside the children component, if tried it will throw error