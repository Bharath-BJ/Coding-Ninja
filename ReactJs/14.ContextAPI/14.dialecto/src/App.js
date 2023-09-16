import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";

// get theme and language contexts here
import themeContext from "./themeContext";
import languageContext from "./languageContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className={`App ${theme}`}>
      <languageContext.Provider value={{language,setLanguage}}>
        <themeContext.Provider value={{theme,setTheme}}>
          <Navbar />
        </themeContext.Provider>
        <Home />
      </languageContext.Provider>
    </div>
  );
}
