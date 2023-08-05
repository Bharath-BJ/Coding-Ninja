import  {Component}  from "react";

class MovieCard extends Component
{
    render()
    {
        return (<>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img  alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"/>
                    </div>
                    <div className="right">
                        <div className="title">Avengers Endgame</div>
                        <div className="plot">It's about the super human assembled to fight the aliens to safeguard the earth</div>
                        <div className="price">Rs.199</div>
                        <div className="footer">
                            <div className="rating">9.4</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/56/56889.png" alt="decrease" className="str-btn"/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Stars" className="stars" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="increase" className="str-btn"/>
                                <span className="starCount">0</span>
                            </div>
                            <button className="favorite-btn">Favorite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>  
            </div>  
        </>)
    }
} 

export {MovieCard};