import {Component} from "react"
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import movies from "./Movies"
import "./styles.css"


class App extends Component{
  constructor()
    {
        super();
        this.state={
            movies:movies,
            cartCount:0
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
        this.setState({movies}); // If both key & value are same we can pass either one
    }
    
    toggleCart(movie){
        let {movies,cartCount}=this.state; 
        let index=movies.indexOf(movie);
        movies[index].carted= !movies[index].carted;
        (movies[index].carted) ? cartCount++ : cartCount--; 
        this.setState({cartCount:cartCount});
        this.setState({movies});
    }

  render()
  {
    const {movies}=this.state;

    return (
      <>
          <Navbar  cartCount={this.state.cartCount} />
          <MovieList  movies={movies}
                      addStars={this.addStars} 
                      decStars={this.decStars} 
                      toggleFav={this.toggleFav} 
                      toggleCart={this.toggleCart}
                      />
      </>
    );
  }
}

export default App;

/*  So on cart functionality, 1st thought comes to be creating catCount state in MoviesList component and when event triggered increment/decrement the cartCount 
    But the issue is to send the updated data to Navbar component which is sibling to MovieList from the DOM str, we know props can passed be between only parent & child
    Solution to this problem is to lift the states upward from MovieList to App component so that cartCount can be passed as props to Navbar component

 * 
 */