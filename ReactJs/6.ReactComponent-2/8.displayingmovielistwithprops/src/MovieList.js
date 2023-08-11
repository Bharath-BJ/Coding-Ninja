import {Component} from "react"
import { MovieCard } from "./MovieCard";
import movies from "./Movies.js"


class MovieList extends Component{
    constructor()
    {
        super();
        this.state={
            movies:movies
        }
        this.addStars=this.addStars.bind(this);
        this.decStars=this.decStars.bind(this);
        this.toggleFav=this.toggleFav.bind(this);
        this.toggleCart=this.toggleCart.bind(this);
    }

    addStars(){
        console.log("this:",this);
        if(this.state.stars>=5)
            return; 
        this.setState({stars: this.state.stars+0.5});   
    }

    decStars(){
        console.log("this:",this);
        if(this.state.stars<=0)
            return;
        this.setState((prevState)=>{
            return {stars: prevState.stars-0.5};
        })    
    }

    toggleFav(){
        this.setState({fav:!fav});
    }
    toggleCart(){
        this.setState({carted:!carted});
    }


    render(){
        // We can also destructure the state as {title,plot,price,rating,stars} then pass them as single values
        // But here we have passed it as movies obj inside the props 
        let {movies}=this.state;
        return(<>
            {movies.map(movie => <MovieCard movies={movie} key={movie.id}/>)}
        </>)
    }
}

export default MovieList;