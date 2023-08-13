import {Component} from "react"


class Navbar extends Component
{

    render()
    {
        return(<>
            <div style={{
                width:"100%",
                height:"40px",
                backgroundColor:"#196179",
                display:"flex",
                justifyContent:"space-between" 
                }}>
                <div className="title" style={{
                        marginLeft:"10px",
                        fontSize:"24px",
                        fontWeight:"600",
                        textTransform:"uppercase",
                        color:"beige"
                    }}>Movie App</div>
                <div style={{
                        position:"relative",
                        right:"10px"
                    }}>
                    <img style={{
                        height: "30px",
                        margin: "5px"
                    }}src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Add to cart"/>

                    <span style={{
                        backgroundColor:"orange",
                        borderRadius:"50%",
                        padding:"0px 2px",
                        position:"absolute",
                        bottom:"20px",
                        right:"-5px",
                        fontSize: "11px"
                    }}>3</span>
                </div>
            </div>
        </>)
    }
}

export default Navbar;