import {Component} from "react"
import styles from "./Navbar.module.css";

class Navbar extends Component
{

    render()
    {
        return(<>
            <div className={styles.main}>
                <div className={styles.title} >Movie App</div>
                <div className={styles.cartContainer}>
                    <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="Add to cart"/>
                    <span className={styles.cartCount} > {this.props.cartCount}</span>
                </div>
            </div>
        </>)
    }
}


export default Navbar;