import React from "react";

// Complete this Component
const ListItem = (props) => {
  
  let {name,link,icon,bgColor}=props.socials;

  return (
    <div className="ListItem" style={{height: 30,backgroundColor:bgColor }} >
    <img src={icon} alt="" />
    <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
