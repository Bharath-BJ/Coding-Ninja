/*import/Export in CRA
Send Feedback
Create a React App with external component files.


Objectives:
There are 2 external Components files HomePage and Form are given. You need to complete them and render Form Component in HomePage Component, and HomePage Component in App Component.
You need to take care that if login button is clicked, then form should not be submitted.
Create and Export two variables name and email from the HomePage component and use them in Form as values for the respective inputs as shown in the image.

Expected Output: Downloaded as output*/

import  HomePage  from "./HomePage";

let style={
  fontFamily:"Arial",
  textAlign:"center"
}

export default function App() {
  
  return <div className="App" style={style}>
    <HomePage/>
  </div>;
}
