import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map(elem=> <ItemCard id={elem.id} name={elem.name} price={elem.price} key={elem.id}/>)}
      
    </div>
  );
}

export default Items;
