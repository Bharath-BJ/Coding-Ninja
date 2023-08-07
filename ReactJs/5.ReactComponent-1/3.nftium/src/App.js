import "./styles.css";
import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";

/**NFTium
Send Feedback
Move the React components in seperate files and render them in the App component

Objectives:
There are 3 Components Navbar, Hero and About in the src directory.
Move the component codes from App.js to their respective files and export them.
The style.css file is already coded for you.
The UI of the page should look excatly the same as it looked earlier.

Expected Output:downloaded as output 
*/

export default function App() {
  // Write this code in Navbar.js file just copy paste
  // Write this code in Hero.js file just copy paste
  // Write this code in About.js file just copy paste

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}


