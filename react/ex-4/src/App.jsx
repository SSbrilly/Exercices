import React from "react";
import "./App.css";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageProvider } from "./LanguageContext";

function App() {
  const languages = ["English", "Spanish", "French"];

  return (
    <LanguageProvider>
      <div className="App">
        <h1>Language Selector</h1>
        <select>
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
