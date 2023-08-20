import React from "react";
import CarDetails from "./CarDetails";

function App() {
  const initialCarData = {
    model: "",
    year: "",
    color: "",
  };

  return (
    <div className="App">
      <h1>Car Details App</h1>
      <CarDetails initialData={initialCarData} />
    </div>
  );
}

export default App;
