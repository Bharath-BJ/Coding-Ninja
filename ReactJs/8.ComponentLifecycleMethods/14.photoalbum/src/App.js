import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";
/*Photo Album
Send Feedback
You are part of a development team who is building a digital image gallery, where Image URLs would be used to display the images.


Note: Add role="img" attribute to the image elements of the react components.


You have been assigned the following tasks to complete the app -

Whenever the site is visited, i.e., whenever the application is mounted, the images should be fetched from the local storage and displayed on the screen.
When you enter the Image URL, it must be stored in the device’s local storage.
The Image list should not be updated if the URL contains some spaces or has a length of fewer than five characters.
You don’t need to worry about invalid URLs as it has already been handled by your team member.

Expected Output:Downloaded as output */
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: ""
    };
  }

  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }
    return JSON.parse(images);
  };

  onAddImage = (e) => {
    e.preventDefault();
    this.addImageToLS();
    this.setState({imageUrl:"",images:this.state.images})
  };

  // Create function to set image url
  handleChange=(event)=>{
    this.setState({imageUrl:event.target.value});
  }

  // Use appropriate lifecycle method to get images

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <button onClick={this.onAddImage}>Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }

  componentDidMount(){
    this.setState({images:this.getImagesFromLS()})
  }
}
