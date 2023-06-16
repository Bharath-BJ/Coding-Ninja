/*
Array Filter
Send Feedback
Create a React app and use the ES6+ array iteration method to filter and render items.


You have to use the h3 element to show each item of the filtered list.


Expected Output: Downloaded as image
*/
const App = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const number=numbers.filter(elem => elem%2==0);
  const listItems=number.map((elem,index) => <h3 key={index}>{elem} </h3>);;
  return (
    <>
      <h1>ES6 Array Iteration Methods</h1>
      {listItems}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);