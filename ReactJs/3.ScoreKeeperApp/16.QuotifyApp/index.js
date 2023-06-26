/*
Quotify App
Send Feedback
Create a Quotify App in React.



Complete the App Component to take "name" and "Quote" as input from the user..
When "Name" and "Quote" are filled and the enter key is pressed, then the Quote should be added successfully and it should appear below it.


Expected Output: Downloaded as Output
*/
const quotes = [];
let nameRef=React.createRef();
let quoteRef=React.createRef();
const clearInputs = () => {
  nameRef.current.value = "";
  quoteRef.current.value = "";
};

// create handleQuote function here

const App = () => (
  <div className="App">
    <h2>Quotify</h2>
    <form>
      <input placeholder="Name" ref={nameRef}></input>
      <br/><br/>
      <input placeholder="Quote" ref={quoteRef} onKeyPress={handleKeyPress}></input>
    </form>
    <div className="quotes">
      {quotes.map((q, i) => (
        <div key={i}>
          <i>"{q.quote}"</i>
          <b>~ {q.name}</b>
        </div>
      ))}
    </div>
  </div>
);

let handleKeyPress=(event)=>{
  if (!nameRef.current.value || !quoteRef.current.value) return;
  if (event.key != "Enter") return;
  // event.preventDefault();
  quotes.unshift({name:nameRef.current.value,quote:quoteRef.current.value});
  clearInputs();
  rootElement.render(<App/>);
}
      
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);