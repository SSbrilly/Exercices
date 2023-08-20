import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>Selected Language: {selectedLanguage}</h2>
    </div>
  );
};

export default DisplayLanguage;
