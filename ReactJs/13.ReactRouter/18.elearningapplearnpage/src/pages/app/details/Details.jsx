import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
import { Link,useParams } from "react-router-dom";
//Third task: import useParams hook

function Details() {
  //Third Task: get course id and match it with the data
  let {id}= useParams();
  let course= coursesData.find((elem)=> elem.id===id);
  return (
    
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>
            {/*Third task: image source here */}
            <img src={course.img} alt="icons" />
          </div>
        </div>
        <div className={style.card_content}>
          {/*Third Task:  Title and Description here */}
          <h1 className={style.card_title}> {course.title} </h1>
          <p className={style.card_description}> {course.description} </p>
        </div>
      </div>
      {/* Task4: create Link to the Learn Page */}
      <button className={style.button}>
        <Link to={`/learn/${course.id}`}>Start Learning</Link>
      </button>
    </div>
  );
}

export default Details;
