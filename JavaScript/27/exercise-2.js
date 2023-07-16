// const person = {
//   id: 1,
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25
// };

// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

// console.log(id, personInfo);

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const [id, personInfo] = [
  person.id,
  {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age,
  },
];

console.log(id, personInfo);
