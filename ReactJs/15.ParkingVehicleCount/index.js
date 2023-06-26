/*
Parking Vehicle Count
Send Feedback
You need to create a React App to show an ordered list of vehicles count in the parking.


Note: Vehicle count in the parking should not decrease less than 0.



If increase button is clicked then that vehicle count should increase by 1 and if decrease button of particular vehicle is clicked then count of that vehicle should decrease by 1.


Expected Output: Downloaded as output
*/
 // Create handlers to increase and decrease vehicle count here

 let car = 0;
 let bike = 0;
 let scooty = 0;
 let bicycle = 0;

 function handleIncrease(vehicle) {
   if (vehicle == "car") car++;
   else if (vehicle == "bike") bike++;
   else if (vehicle == "scooty") scooty++;
   else bicycle++;

   rootElement.render(<App />);
 }

 function handleDecrease(vehicle) {
   if (vehicle == "car" && car > 0) car--;
   else if (vehicle == "bike" && bike > 0) bike--;
   else if (vehicle == "scooty" && scooty > 0) scooty--;
   else if (vehicle == "bicycle" && bicycle > 0) bicycle--;

   rootElement.render(<App />);
 }

 const App = () => (
   <>
     <p>List of all the vehicles count in the parking.</p>
     <ol>
       <li>
         <p>
           <b>Car: {car}</b> &emsp;
           <button onClick={() => handleIncrease("car")}>Increase</button>
           &emsp;
           <button onClick={() => handleDecrease("car")}>Decrease</button>
         </p>
       </li>
       <li>
         <p>
           <b>Bike: {bike}</b> &emsp;
           <button onClick={() => handleIncrease("bike")}>Increase</button>
           &emsp;
           <button onClick={() => handleDecrease("bike")}>Decrease</button>
         </p>
       </li>
       <li>
         <p>
           <b>Scooty: {scooty}</b> &emsp;
           <button onClick={() => handleIncrease("scooty")}>
             Increase
           </button>
           &emsp;
           <button onClick={() => handleDecrease("scooty")}>
             Decrease
           </button>
         </p>
       </li>
       <li>
         <p>
           <b>Bicycle: {bicycle}</b> &emsp;
           <button onClick={() => handleIncrease("bicycle")}>
             Increase
           </button>
           &emsp;
           <button onClick={() => handleDecrease("bicycle")}>
             Decrease
           </button>
         </p>
       </li>
     </ol>
   </>
 );

 const rootElement = ReactDOM.createRoot(document.getElementById("root"));
 rootElement.render(<App />);