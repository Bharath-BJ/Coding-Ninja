import "./styles.css";
/**
 * Props in Functional Components
Send Feedback
Debug the React app to correctly render the Card component with props.


Note: Add role="img" attribute to the image elements of the react components.

Expected Output: Downloaded as output
 */
export const Card = ({name, about}) => (
  <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
  </div>
);

export default function App() {
  return <Card name="Your Name." about="Your Message." />;
}
