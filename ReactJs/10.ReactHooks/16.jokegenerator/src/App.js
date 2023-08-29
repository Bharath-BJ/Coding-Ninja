import { useEffect } from "react";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  // Use the custom hook here
  let {data,getJoke,loading,error}=useFetch(url);
  // Display loading text here
  if(loading)
    return <p>Loading...</p>
  // Display something went wrong here
  if(error)
    return <p>Something went wrong...</p>
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h2>{data.value}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
