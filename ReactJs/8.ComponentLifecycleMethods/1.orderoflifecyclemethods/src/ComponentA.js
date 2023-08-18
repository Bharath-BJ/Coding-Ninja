import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component
{
    constructor(){
        super();
        this.state={
            name:"ComponentA"
        }
        console.log("ComponentA constructor()");
    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps()");
        return null;
    }
    render(){
        console.log("ComponentA render()");
        return (<>
            <h1>{this.state.name}</h1>
            <ComponentB/>
        </>)
    }

    componentDidMount()
    {
        console.log("ComponentA componentDidMount()");
    }
}

export default ComponentA;