import {Component} from "react"


class Navbar extends Component
{

    render()
    {
        return(<>
            <div style={Nav.main}>
                <div className="title" style={Nav.title}>Movie App</div>
                <div style={Nav.cartContainer}>
                    <img style={Nav.cartIcon}src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Add to cart"/>
                    <span style={Nav.cartCount}>3</span>
                </div>
            </div>
        </>)
    }
}

const Nav={
    main:{
        width:"100%",
        height:"40px",
        backgroundColor:"#196179",
        display:"flex",
        justifyContent:"space-between" 
    },
    title:{
        marginLeft:"10px",
        fontSize:"24px",
        fontWeight:"600",
        textTransform:"uppercase",
        color:"beige"
    },
    cartContainer:{
        position:"relative",
        right:"10px"
    },
    cartIcon:{
        height: "30px",
        margin: "5px"
    },
    cartCount:{
        backgroundColor:"orange",
        borderRadius:"50%",
        padding:"0px 2px",
        position:"absolute",
        bottom:"20px",
        right:"-5px",
        fontSize: "11px"
    }

}

export default Navbar;