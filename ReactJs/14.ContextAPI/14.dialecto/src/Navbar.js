import { useContext } from "react";
import themeContext from "./themeContext";
import languageContext from "./languageContext";

export const Navbar = () => {
  // get theme and language contexts here
  const {theme,setTheme}= useContext(themeContext);
  const {language} = useContext(languageContext);

  let changeTheme= ()=> theme==="light"? setTheme("dark") : setTheme("light");
  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={changeTheme}> {theme==="light"? "Light" : "Dark"} theme</button>
        <span>{/* Show active language here */} {language}</span>
      </div>
    </div>
  );
};
