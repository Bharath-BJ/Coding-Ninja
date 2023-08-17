import { Component } from "react";
import Course from "./components/Course";
import {Container} from "./reusable.styled"


class List extends Component {
  
  render() {

    let {courses,handleAddToBag,handleRemoveFromBag,isCourseinBag}=this.props;

    return (
      <Container className="list" flex={3}>
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            onAdd={handleAddToBag}
            onRemove={handleRemoveFromBag}
            isInBag={isCourseinBag}
          />
        ))}
      </Container>
    );
  }
}

export default List;
