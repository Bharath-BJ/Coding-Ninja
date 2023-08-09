import {Component} from "react"

class Student extends Component
{
    render(){
        console.log(this.props);
        // Destructuring the props for our ease of coding 
        let {name,subject}=this.props;
        return(<>
            <h1> Hii {name}</h1>
            <h1>Had you finished your {subject} module</h1>
        </>)

    }
}

export default Student;