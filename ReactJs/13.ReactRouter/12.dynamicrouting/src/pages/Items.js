import {Link} from "react-router-dom";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
        <ul>
          <Link to="/items/item1"><li>item1</li></Link>
          <Link to="/items/item2"><li>item2</li></Link>
        </ul>
      </main>
    </>
  );
}

export default Items;
