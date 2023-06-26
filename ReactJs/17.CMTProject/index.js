/*CMT (Mini Project)
Send Feedback
Create a React App to maintain the records of the customers.
Create a form to get the details of the customers, like the guest count, name, and phone number.
Complete the table to show the records of the customers as shown in the output.
When the form is submitted, then "Seats Left" should decrease by the guest count, and a new entry should appear at the top of the table having a blank "Check Out" column and the status should show "Click to Checkout".
After clicking on "Click to Checkout", the user should be checked out, and the "Check Out" column should show the current timestamp as the checkout time. Also, "Seats Left" should increase the guest count.
Clicking on "Delete" in the "Remove Entry" column should delete the record. If it's already checked out and when delete is clicked, then "Seats Left" should not increase, but if the record is deleted before checking out, then "Seats Left" should increase by the guest count.
When the count of guest exceeds "Seats Left" show an alert with the message "Guest count exceeds capacity". Also the "Seats Left" should never exceed "Total Capacity" or have a negative value.
Optionally handle duplicate name entries by showing an alert with the message "Customer already exists" when someone tries to add an entry with a name that already exists in the records table.

Expected Output: Downloaded as Output


Hint: (click to expand)

Each customer should have the following data -
{ name, phone, count, checkin, checkout }
 */
let customers = [];
const capacity = 25;
let seatsLeft = capacity;
let guestCountRef=React.createRef();
let guestNameRef=React.createRef();
let phoneNumberRef=React.createRef();

// Create form submit handler here
let handleAddEntry=(event)=>{
  event.preventDefault();
  seatsLeft-=guestCountRef.current.value;
  customers.push({
    count:guestCountRef.current.value,
    name:guestNameRef.current.value,
    phone:phoneNumberRef.current.value,
    checkIn:new Date().toLocaleTimeString(),
    checkOut:"-",
    status:<a onClick={onStatusChange} id={guestNameRef.current.value}>Click to Checkout</a>,
    removeEntry:<a onClick={onRemoveEntry} id={phoneNumberRef.current.value}>Delete</a>
  });
  console.log(customers[customers.length-1]);
  clearEntries();
  rootElement.render(<App/>);
}

let onStatusChange=(event)=>{
  event.preventDefault();
  let name=event.target.id;
  console.log("Anchor tag id",name);
  for(let i of customers)
  {
    if(i.name==name)
    {
      i.checkOut=new Date().toLocaleTimeString();
      i.status="Served";
    }
  }
  console.log("Status changed");
  rootElement.render(<App/>);
}

let onRemoveEntry=(event)=>{
  event.preventDefault();
  let phoneNumber=event.target.id;
  console.log("Anchor tag id",phoneNumber);
  for(let i in customers)
  {
    (customers[i].phone==phoneNumber){
      customers.splice(i,1);;
      seatsLeft-=customers[i].count;
    }
  }
  console.log("Entry Removed");
  rootElement.render(<App/>);
}
/* My approaches were naive as I targeted self-written id, we can pass (phone,count) for handleCheckout and (index) for handleRemove to find that row entry 
const handleCheckout = (phone, count) => {
        customers.forEach((c) => {
          if (c.phone === phone) 
            c.checkout = new Date();
        });
        seatsLeft += count;
        rootElement.render(<App />);
      };

 const handleRemove = (index) => {
        let removedEntry = customers.splice(index, 1);
        if (!removedEntry[0].checkout) 
          seatsLeft += removedEntry[0].count;
        rootElement.render(<App />);
      };
      */
let clearEntries=()=>{
  guestCountRef.current.value="";
  guestNameRef.current.value="";
  phoneNumberRef.current.value="";
}

const App = () => (
  <div className="App" style={{ textAlign: "center" }}>
    <div>
      <h2>Total Capacity: {capacity}</h2>
      <h2>Seats Left: {seatsLeft}</h2>
    </div>

    {/* Create a form here */}
    <form>
      <input placeholder="Guest Count" type="number" ref={guestCountRef}></input>
      <input placeholder="Primary Guest Name" ref={guestNameRef}></input>
      <input placeholder="Phone Number" ref={phoneNumberRef}></input>
      <button onClick={handleAddEntry}>Add Entry</button>
    </form>

    {/* Complete table to show records of customers */}
    <table border="1px" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>Count</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Status</th>
          <th>Remove Entry</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((elem)=> <tr key={elem.name}>
                            <td>{elem.count}</td>
                            <td>{elem.name}</td>
                            <td>{elem.phone}</td>
                            <td>{elem.checkIn}</td>
                            <td>{elem.checkOut}</td>
                            <td>{elem.status}</td>
                            <td>{elem.removeEntry}</td>
                          </tr>)}
      </tbody>
    </table>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);