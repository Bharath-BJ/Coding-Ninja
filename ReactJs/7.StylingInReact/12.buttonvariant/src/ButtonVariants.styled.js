import styled from 'styled-components'

// For border as we used OR operator first truthy or last falsy value evaluated
let ButtonView =styled.button`
    outline: none;
    background-color: ${(props) => (props.filled ? props.bg || "#000" : "#fff")};
    color: ${(props) => (props.filled ? props.color || "#fff" : "#000")};
    border: ${(props) => (props.filled ? "none" : "3px solid #000")};
    height: 55px;
    width: 280px;
    font-size: 30px;
    font-weight: 600;
`

export default ButtonView;