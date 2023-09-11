import { useContext } from "react";
import ColorContext from "../ColorContext";

const GrandChildComponent = () => {
  const value=useContext(ColorContext);

  return <p style={{ color: value }}>Color: {value}</p>
};

export default GrandChildComponent;
