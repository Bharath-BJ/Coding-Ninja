import { useState } from "react";
import ChildComponent from "./ChildComponent";
import ColorContext from "../ColorContext";

const ParentComponent = (props) => {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <ColorContext.Provider value={color}>
        <ChildComponent />
      </ColorContext.Provider>
    </>
  );
};

export default ParentComponent;
