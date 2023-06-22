// Unlike HTML in JSX event handler function should not be called rather passed, if called then it is executed when page loaded
// After updating the score then once again <App/> has to be re-renderd
// And Most importantly while rendering only the score tag that was changed was re-rendered courtesy of the Virtual DOM
let score=0,wicket=0;
function clickOne(){
    score=score+1;
    root.render(<App/>);
}
function clickTwo(){
    score=score+2;
    root.render(<App/>);
}
const App=()=>{
    return(<>
        <h1>SCORE KEEPER</h1>
        <h1>Score {score}/{wicket}</h1>
        <button onClick={clickOne}>1</button>
        <button onClick={clickTwo}>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>Wicket</button>
    </>)
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);