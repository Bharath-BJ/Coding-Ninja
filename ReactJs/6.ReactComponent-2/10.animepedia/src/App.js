import React from "react";
import "./styles.css";
import AnimeList from "./AnimeList";
/**
 * AnimePedia
Send Feedback
Create a React app to render an anime list using props as shown in the output.

Note: Pass given anime data as anime prop to the AnimeList component.
Import the AnimeCard component in AnimeList.js.
Inside of AnimeCard render an image and a paragraph with:
    - Image source set to the image prop received from AnimeList
    - Paragraph text set to the name prop received from AnimeList


Note: Add role="img" attribute to the image elements of the react components.


Expected Output: Downloaded as output
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [
        {
          name: "One Piece",
          image:
            "https://image.tmdb.org/t/p/original/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg"
        },
        {
          name: "Demon Slayer",
          image:
            "https://image.tmdb.org/t/p/original/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg"
        },
        {
          name: "Full Metal Alchemist",
          image:
            "https://image.tmdb.org/t/p/original/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg"
        }
      ]
    };
  }

  render() {

    let {anime}=this.state;
    return (
      <div>
        <h1>Animepedia</h1>
        {<AnimeList anime={anime} />}
      </div>
    );
  }
}

export default App;
