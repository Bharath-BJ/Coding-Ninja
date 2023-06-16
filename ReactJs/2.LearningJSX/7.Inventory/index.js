/*Inventory
Send Feedback
You want to create a simple dashboard for an electronic store where we can see the name, selling price, quantity, and total revenue for sold products in a table format.


Note: You are given the list of sold items.


Create columns inside the table head with appropriate labels to match the expected output image.
Iterate over the data and for each item render appropriate fields inside the table body.
Create a table footer and display the revenue of the sold items.



Expected Output: Downloaded as Output
Hint:(click to expand)

Learn more about the reduce method here
 */

const App = () => {
  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
  ];

  let listItems=itemsSold.map((elem)=> <tr key={elem.id}>
                                        <td>{elem.id}</td>
                                        <td>{elem.name}</td>   
                                        <td>{elem.price}</td>  
                                        <td>{elem.qty}</td>       
                                      </tr>);
  // Array.reduce((accumulator,currentValue)=>{},initialValueOfAccumulator) method is useful to get the sum of all elements                    
  let totalRevenue=itemsSold.reduce((sum,elem)=>sum+elem.price,0);
  return (
    <>
      <h1>Record of sold items</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Revenue</td>
            <td colSpan="3" >${totalRevenue}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);