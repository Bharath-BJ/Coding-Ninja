import { useState } from "react";





export default function MoodPredictor(){
    let text=["sad","excited","happy"]
    let [random,setRandom]=useState(Math.floor(Math.random()*3));
    let [display,setdisplay]=useState(false);
    
    function handleClick(){
        setdisplay(true);
        setRandom(Math.floor(Math.random()*3));
    }

    return(<>
        <h2>Mood Predictor</h2>
        {display &&<p>Mood Predictor has predicted that you mood will be
            <strong> {text[random]}</strong> today
        </p> }
        <button onClick={handleClick}>Predict Mood</button>
        </>)
}



