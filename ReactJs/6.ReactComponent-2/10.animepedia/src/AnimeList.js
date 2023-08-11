import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    
    let {anime}=this.props;
    return <div className="anime-list">
      {anime.map(animation => <AnimeCard card={animation}/>)}
    </div>;
  }
}

export default AnimeList;
