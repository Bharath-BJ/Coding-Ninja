import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component
{
    constructor(){
        super();
        this.state={
            name:"ComponentA",
            data:[]
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
            {this.state.data.map(d => <li key={d.id}> {d.username} </li>)}
            <ComponentB/>
        </>)
    }

    componentDidMount()
    {
        console.log("ComponentA componentDidMount()");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => this.setState({data:json}));
    }
}

export default ComponentA;