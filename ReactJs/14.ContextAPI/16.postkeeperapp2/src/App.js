import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import CustomPostContext from "./postContext";

export default function App() {
  return (
    <div className="App">
      <CustomPostContext>
        <Navbar />
        <List />
      </CustomPostContext>
    </div>
  );
}
