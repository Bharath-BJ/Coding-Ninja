import "./styles.css";
import List from "./List";
/**
 * Scoping styles with CSS modules
Send Feedback
You and your friend are building a simple E-Commerce site. You asked your friend to work on the products list while you were working on the main page. As soon as the page is completed, you find that your and your friend's style has mixed up.


So, you decide to refactor the styles and use a different approach to resolve this issue.


Note: Add role="img" attribute to the image elements of the react components.



Fix the styles so that your output matches the expected output.


Expected Output: Downloaded as output
 */
export default function App() {
  return (
    <div>
      <h3 className="title">Ecommerce Store</h3>
      <List />
    </div>
  );
}
