import React, { useRef, useEffect } from "react";

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  return (
    <div>
      <h2>Car Details Form</h2>
      <form ref={formRef}>
        <div>
          <label>Model:</label>
          <input type="text" name="model" defaultValue={initialData.model} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" name="year" defaultValue={initialData.year} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" name="color" defaultValue={initialData.color} />
        </div>
      </form>
    </div>
  );
}

export default CarDetails;
