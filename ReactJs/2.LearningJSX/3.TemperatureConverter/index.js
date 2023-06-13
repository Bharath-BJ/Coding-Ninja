/*
Temperature Converter
Send Feedback
Create a React app to convert temperature from fahrenheit to celsius.


Note: You have to use paragraph tags to display the data and H1 tag for the heading.



Expected Output: Downloaded as image

*/
const App = () => {
  let TinF=12;
  let TinC= (TinF-32)*5/9;
  return (
    <>
    <h1>Temperature Converter</h1>
    <p>Temperature in fahrenheit: {TinF}</p>
    <p>Temperature in celsius: {TinC}</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
