// To avoid using multiple fucntions with the same function body, we can pass the noOfClicks variable by using inline arrow function
let score=0,wicket=0;
let ballWiseRes=[];
let hit=0;
function addScore(num){
    hit=num;
    root.render(<App/>);
}

function addWicket(){
    hit="W";
    root.render(<App/>);
}

function ScoreButton(){
    return(<>
        <div>
            <button onClick={()=>addScore(0)}>0</button>
            <button onClick={()=>addScore(1)}>1</button>
            <button onClick={()=>addScore(2)}>2</button>
            <button onClick={()=>addScore(3)}>3</button>
            <button onClick={()=>addScore(4)}>4</button>
            <button onClick={()=>addScore(6)}>6</button>
            <button onClick={addWicket}>Wicket</button>
        </div>
    </>);
}

let Result=()=>(<>
    <div>
        {ballWiseRes.map((elem,index) =>(<>
                    {index%6==0 ? <br/>:null} 
                    <span key={index}> {elem==0? <strong>.</strong> : elem } </span>&nbsp;&nbsp;&nbsp;
                    </>)
        )}
    </div>
    </>);

// This is synthetic event to prevent the reload feature of the form
const handleSubmit=(event)=>{
    event.preventDefault();
    ballWiseRes.unshift(hit);
    console.log(ballWiseRes);
    root.render(<App/>);
}

const Form=()=>(<>
    <form onSubmit={handleSubmit}>
        <input value={hit}></input>
        <input></input>
        <button>Submit</button>
    </form>
    </>);

const App=()=>{
    return(<>
        <h1>SCORE KEEPER</h1>
        <h1>Score {score}/{wicket}</h1>
        <ScoreButton/>
        <br/>
        <Form/>
        <hr/>
        {ballWiseRes.map((elem,index)=> <p key={index}> {elem} </p>)}
    </>)
};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);