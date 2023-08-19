import { Component } from "react";

class Timer extends Component
{
    constructor(){
        super();
        this.state={
            time:0,
        }
        this.timer=null;

        console.log("TimerOne constructor()");
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
            <h1>Timer Spent : {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
        </>)
    }

    componentDidMount()
    {
        console.log("TimerOne componentDidMount()");
        console.log("_________________________________")
        this.timer=setInterval(()=>{
                                        this.setState({time:this.state.time+1});    
                                    },1000)
    }

    getSnapshotBeforeUpdate(){
        console.log("TimerOne getSnapshotBeforeUpdate()");
    }

    componentDidUpdate(){
        console.log("TimerOne componentDidUpdate()");
        console.log("_________________________________")
    }

    componentWillUnmount(){
        
        console.log("TimerOne componentWillUnmount()");
        console.log("_________________________________")
        clearInterval(this.timer);
    }
}

export default Timer;