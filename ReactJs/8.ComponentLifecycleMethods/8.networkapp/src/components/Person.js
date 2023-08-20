import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here

  render() {
    console.log(this.props);
    const { person,index,removePerson } = this.props;
    const {img, email} = person;
    return (
      <div className="person">
        <b onClick={()=>removePerson(index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
