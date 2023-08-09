import "./styles.css";
import React from "react";
import List from "./components/List.js"
/*React Props
Send Feedback
Create a React App using props.


Note: Add role="img" attribute to the image elements of the react components.


Use the data in the List component that is in the component folder to render the ListItem components.
You need to complete the code of all the 3 components, i.e., App, List and ListItem
In ListItem component, add background color of div and also add values of attributes of the elements listed in it with the help of props.


Expected Output: Downloaded as output */

function App() {
  return (
    <div className="App">
      <h1>Reach me</h1>
      <List/>
    </div>
  );
}

export default App;
