import React from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
  return (
    <LanguageContext.Consumer>
      {(context) => (
        <div>
          <h1>Selected Language: {context.selectedLanguage}</h1>
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default DisplayLanguage;
