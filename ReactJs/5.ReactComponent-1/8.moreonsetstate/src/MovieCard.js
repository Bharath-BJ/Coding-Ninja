import  {Component}  from "react";

class MovieCard extends Component
{
    constructor()
    {
        super();
        this.state={
            title:"Avengers-Endgame",
            plot:"It's about the super human assembled to fight the aliens to safeguard the earth",
            price:"Rs.199",
            rating:9.4,
            stars:0
        }
        this.addStars=this.addStars.bind(this);
        this.decStars=this.decStars.bind(this);
    }

    addStars(){
        console.log("this:",this);
        // Method 1 - Only last setState function batched was executed and also setState() in callback was also executed
        this.setState({stars: this.state.stars+0.5});  
        this.setState({stars: this.state.stars+0.5});  
        this.setState({stars: this.state.stars+0.5});
        this.setState({stars: this.state.stars+5},()=>{
            console.log("Synchoronous code in async function of Method 1:",this.state.stars);
            this.setState({stars: this.state.stars+0.5},()=>console.log("Synchoronous code in async function of Method 1:",this.state.stars))
        });  
        console.log("Synchoronous code in Method1:",this.state.stars);
    }

    decStars(){
        console.log("this:",this);
        // Method 2 - All setState funtions are executed and also setState() in corresponding callback were also executed
        this.setState((prevState)=>{
            return {stars: prevState.stars-0.5};
        })    
        this.setState((prevState)=>{
            return {stars: prevState.stars-0.5};
        })
        this.setState((prevState)=>{
            return {stars: prevState.stars-0.5};
        })
        this.setState((prevState)=>{
            return {stars: prevState.stars-0.5};
        },()=> {
            console.log("Synchoronous code in async function of Method 2:",this.state.stars);
            this.setState(prevState=>{ return {stars:prevState.stars-5} })
        })
        console.log("Synchoronous code in Method2:",this.state.stars);
    }

    render()
    {
        // To check the re-rendering of App component after every setState()
        console.log("Rendering the App component");
        // We can destructure the obj to get the individual values
        const {title,plot,price,rating,stars}=this.state;
        return (<>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img  alt="Poster" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"/>
                    </div>
                    <div className="right">
                        {/* We can use values either directly from the state or destructured value */}
                        <div className="title">{this.state.title}</div>
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