import {Component} from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return{hasError:true}
    }
    componentDidCatch(error,info){
        console.log("Error :",error);
        console.log("Info :",info);
    }

    render(){
        if(this.state.hasError){
            return(<h1>Something went wrong, contact Admin</h1>)
        }
        return(<>
            {this.props.children}
        </>)
    }
}

export default ErrorBoundary;