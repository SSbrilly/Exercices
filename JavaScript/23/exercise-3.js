// function isAdult(person) {
//   return person.age >= 18;
// }

// const person = {
//   id: 1,
//   firstName: "Mario",
//   lastName: "Rossi",
//   age: 25,
// };

// console.log(isAdult(person));

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 31,
};

const { age } = person;

console.log(age);

function isAdult(person) {
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAdult(person));

//non ho ben capito la traccia
