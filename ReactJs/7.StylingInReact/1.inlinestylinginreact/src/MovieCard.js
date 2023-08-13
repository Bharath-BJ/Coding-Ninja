import  {Component}  from "react";

class MovieCard extends Component
{
    
    

    render()
    {
        // We can destructure the movies obj & other individual values separetely from the props. Then destructuring movies as well
        const {movies,addStars,decStars,toggleFav,toggleCart}=this.props;
        const {title,plot,price,rating,stars,imgSrc,fav,carted}=movies;
        
        return (<>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img  alt="Poster" src={imgSrc} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img onClick={()=>decStars(movies)} src="https://cdn-icons-png.flaticon.com/128/56/56889.png" alt="decrease" className="str-btn"/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Stars" className="stars" />
                                <img onClick={()=>addStars(movies)} src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" className="str-btn"/>
                                <span className="starCount">{stars}</span>
                            </div>
                            {/* We can also provide condition to render different buttons but here we have simplified the code */}
                            <button onClick={()=>toggleFav(movies)} className={fav? "unfavourite-btn" : "favourite-btn"}> {fav? "Unfavourite":"Favorite"}</button>
                            <button onClick={()=>toggleCart(movies)} className="cart-btn">{carted?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>  
            </div>  
        </>)
    }
} 

export {MovieCard};