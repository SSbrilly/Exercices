import React, { useContext } from "react";
import "./App.css";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageProvider, LanguageContext } from "./LanguageContext";

function App() {
  const languages = ["English", "Spanish", "French"];
  const { setSelectedLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <LanguageProvider>
      <div className="App">
        <h1>Language Selector</h1>
        <select onChange={handleLanguageChange}>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        <DisplayLanguage />
      </div>
    </LanguageProvider>
  );
}

export default App;
