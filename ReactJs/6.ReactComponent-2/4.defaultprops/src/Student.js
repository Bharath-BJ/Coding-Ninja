import {Component} from "react"

class Student extends Component
{
    render(){
        console.log(this.props);
        let {name,subject,info}=this.props;
        return(<>
            <h1> Hii {name}</h1>
            <h1>Had you finished your {subject} module</h1>
            <h1>Passed out year {info.since}</h1>
            <h1>motto will be undefined as default overwritten by props {info.motto} </h1>
        </>)

    }
}

export default Student;