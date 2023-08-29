import { useState,useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  let [name,setName]=useState("");
  let [age,setAge]=useState(1);

  useEffect(()=>{
    let name =localStorage.getItem("name");
    let age=localStorage.getItem("age");
    if(name)
      setName(name);
    if(age)
      setAge(age);
  },[]);

  useEffect(()=>{
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
  },[name,age]);
  
return {name,setName,age,setAge};
};

export default useLocalStorage;
