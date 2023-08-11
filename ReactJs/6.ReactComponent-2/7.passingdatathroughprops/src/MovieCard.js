import  {Component}  from "react";

class MovieCard extends Component
{
    
    

    render()
    {
        // We can destructure the obj to get the individual values
        const {title,plot,price,rating,stars,fav,carted}=this.props.movies;
        return (<>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img  alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img onClick={this.decStars} src="https://cdn-icons-png.flaticon.com/128/56/56889.png" alt="decrease" className="str-btn"/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Stars" className="stars" />
                                <img onClick={this.addStars} src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" className="str-btn"/>
                                <span className="starCount">{stars}</span>
                            </div>
                            {/* We can also provide condition to render different buttons but here we have simplified the code */}
                            <button onClick={fav? this.handleUnfav:this.handleFav} className={fav? "unfavourite-btn" : "favourite-btn"}> {fav? "Unfavourite":"Favorite"}</button>
                            <button onClick={carted? this.removeFromCart:this.addToCart} className="cart-btn">{carted?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>  
            </div>  
        </>)
    }
} 

export {MovieCard};