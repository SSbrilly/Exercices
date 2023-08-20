import React from "react";
import "./App.css";
import LanguageContext from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";

function App() {
  const selectedLanguage = "English";
  return (
    <div className="App">
      <h1>Language App</h1>
      <LanguageContext.Provider value={selectedLanguage}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
