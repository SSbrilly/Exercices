const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = 'simon',

// Modify the property `firstName` of the `person2` in "Simon".
// because person 2 does not become a copy of person1, instead it accesses its memory location 

console.log(person1);
console.log(person2);
