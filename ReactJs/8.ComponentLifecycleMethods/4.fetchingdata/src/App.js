import "./styles.css";
import React from "react";
import Image from "./components/Image";

/*Fetching Data
Send Feedback
You are part of a development team who is building a digital image gallery app.


Note: Add role="img" attribute to the image elements of the react components.


You have been assigned the following tasks to complete the app :

Images should be fetched from an API without unnecessary rerenders.
While the images are being fetched, a simple loading message Loading... should be displayed.
URL to fetch images - https://jsonplaceholder.typicode.com/albums/1/photos

Expected Output: Downloaded as output */

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(response=> response.json())
    .then(json=> this.setState({photos:json,loading:false}))
  }

  render() {
    // Display loading status here
    return (
      <div className="App">
        <p> {this.state.loading && "Loading..."}</p>
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
