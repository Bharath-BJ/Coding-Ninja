let toShow=false;
const setShow = () => {
    toShow=!toShow;
  rootElement.render(<App/>);
};

const App = () => (
  <>
    <h1>Coding Ninjas</h1>
    <button onClick={setShow}> {toShow?"Hide Element Below":"Show Element Below"} </button>
    {toShow && <p>Hello ninjas, I am here.</p>}
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);


