import { Component } from "react";

class Timer extends Component
{
    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer=null;

        console.log("TimerOne constructor()");
    }
    
    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps()");
        return null;
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("TimerOne shouldComponentUpdate()");
        console.log("nextProps",nextProps);
        console.log("nextState",nextState);
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
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("TimerOne getSnapshotBeforeUpdate()");
    return 5;
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("TimerOne componentDidUpdate()");
        console.log("_________________________________")
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
        console.log("snapShot from getSnapshotBeforeUpdate",snapShot);
        if(prevProps.timerOn!==this.props.timerOn)
        {
            if(this.props.timerOn)
            {
                this.timer=setInterval(()=>{
                                            this.setState({time:this.state.time+1})
                                            },1000)
            }        
            else
                clearInterval(this.timer);
        }
    }

    componentWillUnmount(){
        
        console.log("TimerOne componentWillUnmount()");
        console.log("_________________________________")
    }
}

export default Timer;