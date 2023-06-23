// To avoid using multiple fucntions with the same function body, we can pass the noOfClicks variable by using inline arrow function
let score=0,wicket=0;
function addScore(num){
    if(wicket<10)
    {
        score=score+num;
        root.render(<App/>);
    }
}

function addWicket(){
    if(wicket<10)
    {
        wicket+=1;
        root.render(<App/>);
    }
}
const App=()=>{
    return(<>
        <h1>SCORE KEEPER</h1>
        <h1>Score {score}/{wicket}</h1>
        <button onClick={()=>addScore(1)}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
        <button onClick={()=>addScore(3)}>3</button>
        <button onClick={()=>addScore(4)}>4</button>
        <button onClick={()=>addScore(5)}>5</button>
        <button onClick={()=>addScore(6)}>6</button>
        <button onClick={addWicket}>Wicket</button>
    </>)
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);