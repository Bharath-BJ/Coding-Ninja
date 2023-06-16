// Object cannot be accepted as React child, so only it's properties can be displayed in UI
// Array can be displayed as if all elements are joined, otherwise we have to iterate over it  
// for loop will not work in react as for loop does not return any value, so map() function is used as it returns an array after manipulation
const App = () => {

    let cars=["BMW","AUDI","VOLVO","BENZ"];
    let obj={
      first:"first",
      second:"second"
    }
    let listItems=cars.map((elem,index) => <li key={index} >{elem}</li>)
    return (<>
    <h1>Array elements</h1>
    <h1> {listItems}</h1>
    <h1>Object {obj.first}</h1>
    <h1>Object {obj.second}</h1>
    </>);
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);