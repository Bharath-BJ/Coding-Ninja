import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.display=null;
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevProps,prevState,snapShot){
    if(prevProps.showName!==this.props.showName)
    {
      if(this.props.showName){
        this.display=setInterval(()=> this.typeWriterEffect(),500)
      }
      else
        clearInterval(this.display);
    }
  }
  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
