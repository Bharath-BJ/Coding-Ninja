import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    
    let {name,image}=this.props.card;
    return <div className="anime-card">
      <img src= {image} alt="" role="img"/>
      <p>{name}</p>
    </div>;
  }
}

export default AnimeCard;
