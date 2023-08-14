import {Component} from "react"
import styled from "styled-components";

const Main= styled.div`width:100%;
height:40px;
background-color:#196179;
display:flex;
justify-content:space-between;`

const Title= styled.div`margin-left:10px;
font-size:24px;
font-weight:600;
text-transform:uppercase;
color:beige;`

const CartContainer= styled.div`position:relative;
right:10px;`

const CartIcon = styled.img`height:30px;
margin: 5px;`

const CartCount = styled.span`background-color:orange;
border-radius:50%;
padding:0px 2px;
position:absolute;
bottom:20px;
right:-5px;
font-size: 11px;`

class Navbar extends Component
{

    render()
    {
        return(<>
            <Main>
                <Title>Movie App</Title>
                <CartContainer>
                    <CartIcon src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Add to cart"/>
                    <CartCount >3</CartCount>
                </CartContainer>
            </Main>
        </>)
    }
}



export default Navbar;