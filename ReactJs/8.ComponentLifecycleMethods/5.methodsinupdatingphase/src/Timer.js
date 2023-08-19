import { Component } from "react";

class Timer extends Component
{
    constructor(){
        super();
        this.state={
            count:0,
        }
        console.log("TimerOne constructor()");
    }

    handleClick(){
        this.setState({count:count+1})
    }
    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps()");
        return null;
    }

    shouldComponentUpdate(nextState,nextProps)
    {
        console.log("TimerOne shouldComponentUpdate()");
        return true;
    }

    render(){
        console.log("TimerOne render()");
        return (<>
            <h1> Count :{this.state.count}</h1>
            <button onClick={handleClick}>Increase</button>
        </>)
    }

    componentDidMount()
    {
        console.log("TimerOne componentDidMount()");
        console.log("_________________________________")
    }

    getSnapshotBeforeUpdate(){
        console.log("TimerOne getSnapshotBeforeUpdate()");
    }

    componentDidUpdate(){
        
        console.log("TimerOne componentDidUpdate()");
        console.log("_________________________________")
    }
}

export default Timer;