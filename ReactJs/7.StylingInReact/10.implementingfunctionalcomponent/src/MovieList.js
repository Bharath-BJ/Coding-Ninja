
import { MovieCard } from "./MovieCard";


function MovieList (){

    
        // We can also destructure the state as {title,plot,price,rating,stars} then pass them as single values
        // But here we have passed it as movies obj inside the props 
        let {movies,addStars,decStars,toggleFav,toggleCart}=this.props;
        return(<>
            {movies.map(movie => 
            <MovieCard  movies={movie} 
                        addStars={addStars} 
                        decStars={decStars} 
                        toggleFav={toggleFav} 
                        toggleCart={toggleCart}
                        key={movie.id} 
                        />)}
        </>)
    
}

export default MovieList;