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

    addStars(movie){
        let {movies}=this.state; 
        let index=movies.indexOf(movie);
        if(movies[index].stars>=5)
            return;
        movies[index].stars+=0.5;
        this.setState({movies:movies });   
    }

    decStars(movie){
        let {movies}=this.state; 
        let index=movies.indexOf(movie);
        if(movies[index].stars<=0)
            return;
        movies[index].stars-=0.5;
        this.setState({movies:movies });
    }

    toggleFav(movie){
        let {movies}=this.state; 
        let index=movies.indexOf(movie);
        movies[index].fav= !movies[index].fav;
        this.setState({movies});
    }
    
    toggleCart(movie){
        let {movies}=this.state; 
        let index=movies.indexOf(movie);
        movies[index].carted= !movies[index].carted;
        this.setState({movies});
    }


    render(){
        // We can also destructure the state as {title,plot,price,rating,stars} then pass them as single values
        // But here we have passed it as movies obj inside the props 
        let {movies}=this.state;
        return(<>
            {movies.map(movie => 
            <MovieCard  movies={movie} 
                        addStars={this.addStars} 
                        decStars={this.decStars} 
                        toggleFav={this.toggleFav} 
                        toggleCart={this.toggleCart}
                        key={movie.id} 
                        />)}
        </>)
    }
}

export default MovieList;