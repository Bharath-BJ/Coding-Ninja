import colorContext from "../ColorContext";

const GrandChildComponent = () => {
  // const value=useContext(colorContext);
  <colorContext.Consumer>
    {(value)=> <p style={{ color: value }}>Color: {value}</p> }
  </colorContext.Consumer>
};

export default GrandChildComponent;
