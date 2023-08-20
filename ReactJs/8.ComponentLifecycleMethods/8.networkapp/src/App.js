import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

/*Network App
Send Feedback
Your friend has built an app that displays the people inside your network. Now you both decided to collaborate on this project, and you are expected to add the following functionality.


Note: Add role="img" attribute to the image elements of the react components.

There should be an option to remove a person from the network and display an alert accordingly.

Hint:

The index of the person should be used to change the show property to conditionally render the Person component.

Expected Output: Downloaded as output */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true
        },
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true
        },
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true
        }
      ]
    };
    
  }

  // Create function to remove person from your network here
  removePerson(index){
      let {network}=this.state;
      network[index].show=!network[index].show;
      this.setState({network});
      alert(`A Person with email ${network[index].email} is removed from your network!`);  // asynchoronously executed even before entry removed
  }

  render() {
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
          {this.state.network.map((p, i) => 
          p.show && (<Person key={i} person={p} index={i} removePerson={this.removePerson.bind(this)}/>) 
          )}
        </div>
      </div>
    );
  }
}

export default App;
