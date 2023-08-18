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
        // Worked but nothing affected for me. CN instructor showed can't setState the component that's still not mounted
        // this.setState({name:"ComponentB"});
    }

    static getDerivedStateFromProps(){
        // Cannot read properties of undefined (reading 'setState') error occured
        // this.setState({name:"ComponentB"});
        console.log("ComponentA getDerivedStateFromProps()");
        return null;
    }
    render(){
        // We know setState update the state value and re-render the App,so here it will on goes on rendering again and again 
        // this.setState({name:"ComponentB"});
        console.log("ComponentA render()");
        return (<>
            <h1>{this.state.name}</h1>
            <ComponentB/>
        </>)
    }

    componentDidMount()
    {
        // Works without any error
        this.setState({name:"ComponentB"});
        console.log("ComponentA componentDidMount()");
    }
}

export default ComponentA;