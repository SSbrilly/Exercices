import React, { useMemo } from "react";

function FilteredList({ items }) {
  const filteredList = useMemo(() => {
    return items.filter((item) => item.age > 18);
  }, [items]);

  return (
    <div>
      <h2>Filtered List</h2>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
