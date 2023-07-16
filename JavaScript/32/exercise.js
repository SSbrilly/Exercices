// const person = {
//   id: 1,
//   firstName: "Mario",
//   lastName: "Rossi",
//   age: 25,
// };

// const json = JSON.stringify(function (key, value) {
//   if (value === 'Number') {
//     return key + value;
//   }
// });

// console.log(json); // Should return: { id: 1, age: 25 }

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const json = JSON.stringify(person, ["id", "age"]);

console.log(json); // Should return: { id: 1, age: 25 }
