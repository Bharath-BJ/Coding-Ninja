import {Component} from "react";
import "./styles.css";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { courses } from "./data";


/**
 * CodeTube app
Send Feedback
You have created an online course-buying platform called CodeTube Catalog, where you can buy courses and follow/unfollow your favorite instructors.


You realize that the “follow/unfollow” and “add to bag” buttons are similar. The course list and instructor list styles are also similar.


Note: Add role="img" attribute to the image elements of the react components.



So, you decide to create reusable components called Button and Container using styled-components. The Button component should have a bg property which sets the background color and the Container should have a flex  property which sets the flex value.
You have also built individual components like Course, Sidebar, etc. When you add/remove a course from the bag, the count of courses in the bag doesn’t get updated. Find a way to fix this issue without changing the output.


Expected Output: Downloaded as output
 */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bagItems: [],
    };
  }

  isCourseinBag = (id) => {
    return !!this.state.bagItems.find((c) => c.id === id);
  };

  handleAddToBag = (id) => {
    const course = courses.find((c) => c.id === id);
    this.setState({ bagItems: [course, ...this.state.bagItems] });
  };

  handleRemoveFromBag = (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    this.setState({ bagItems: filteredCourses });
  };

  render()
  {
    return (
      <div className="App">
        <Navbar cartCount={this.state.bagItems.length}/>
        <h3>CodeTube Catalog</h3>
        <div className="container">
          <List courses={courses}
                isCourseinBag={this.isCourseinBag}
                handleAddToBag={this.handleAddToBag}
                handleRemoveFromBag={this.handleRemoveFromBag}/>
          <Sidebar />
        </div>
      </div>
    );
  }
}
