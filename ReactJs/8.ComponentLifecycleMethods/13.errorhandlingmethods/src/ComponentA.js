import { Component } from "react";

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
        </>)
    }

    componentDidMount()
    {
        console.log("ComponentA componentDidMount()");
        fetch('https://jsonplaceholder.typicode.com/user') // Here we deliberately making error to view fallback UI of ErrorBoundary Component
        .then((response) => response.json())
        .then((json) => this.setState({data:json}));
    }
}

export default ComponentA;