import { Component } from "react";

class ComponentA extends Component
{
    constructor(){
        super();
        this.state={
            name:"ComponentA",
            data:[]
        }
        console.log("1st function to execute in the Mounting cycle : constructor()");
    }

    static getDerivedStateFromProps(){
        console.log("2nd function to execute in the Mounting cycle : getDerivedStateFromProps()");
        return null;
    }
    render(){
        console.log("3rd function to execute in the Mounting cycle : render()");
        return (<>
            <h1>{this.state.name}</h1>
            {this.state.data.map(d => <li key={d.id}> {d.username} </li>)}
        </>)
    }

    componentDidMount()
    {
        console.log("4th function to execute in the Mounting cycle : componentDidMount()");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => this.setState({data:json}));
    }
}

export default ComponentA;