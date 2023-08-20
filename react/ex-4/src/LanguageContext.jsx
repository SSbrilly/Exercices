import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h2>Selected Language</h2>
      <p>Current Language: {language}</p>
    </div>
  );
}

export default DisplayLanguage;
