import "./styles.css"
import Hero from "./Hero.js"
import {Skills} from "./Skills.js"
import About from "./About.js"
/**User Profile
Send Feedback
Create a React app to display your basic information and technical skills

Objectives:
There are 3 components Hero, Skills and About. Write the code of all the components.
The Hero component should render your basic information like name, email, phone and address
The Skills component should render an unordered list and list all your technical skills.
The About component should render a paragraph with description of your hobbies, projects and work experiences.
Write code for CSS in file styles.css to make it look similar to as shown in the image.

Expected Output: Downloaded as output */

function App() {
  return (
    <>
      <Hero/>
      <Skills/>
      <About/>
    </>
  );
}

export default App;
