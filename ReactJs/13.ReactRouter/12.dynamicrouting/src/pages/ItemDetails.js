import { useParams } from "react-router-dom";

function ItemDetails() {
    let params=useParams();
    console.log(params);

    return (
      <>
        <h1>Item Details</h1>
        <p>{params.id}</p>
      </>
    );
  }
  
  export default ItemDetails;