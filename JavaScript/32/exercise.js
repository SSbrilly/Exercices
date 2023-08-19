const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const filteredPerson = Object.keys(person)
  .filter((key) => key === "id" || key === "age")
  .reduce((obj, key) => {
    obj[key] = person[key];
    return obj;
  }, {});

const json = JSON.stringify(filteredPerson);

console.log(json); // Dovrebbe restituire: { "id": 1, "age": 25 }
