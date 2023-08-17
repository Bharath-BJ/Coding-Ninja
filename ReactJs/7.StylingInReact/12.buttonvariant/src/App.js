import "./styles.css";
import ButtonView from "./ButtonVariants.styled"

/*
Button Variants
Send Feedback
Generally web applications often have multiple buttons, and most of them have similar features and styles.


You want to create a reusable button component called ButtonView using styled components which can be modified based on the properties that are being passed.
The ButtonView component should display an outlined button by default. The button should have a black border and text and white background.
The ButtonView styled component should have the following properties

 filled - Displays a button with a black background and white text by default

 bg - Changes the background color of the filled button

 color - Changes the text color of the filled button

Note: bg and color should only apply styles to a filled button.


Expected Output: Downloaded as output */

export default function App() {
  return (
    <div className="App">
      <h3>Button Variants</h3>
      <div>
        <h3>Outlined Button</h3>
        <ButtonView> OUTLINED </ButtonView>
      </div>
      <div>
        <h3>Filled Button</h3>
        <ButtonView filled="none" bg="cyan" color="red" >FILLED </ButtonView>
      </div>
    </div>
  );
}
