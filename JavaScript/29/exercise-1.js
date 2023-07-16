class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', new Date(1991, 07, 30));
let str = JSON.stringify(developer)
// Print developer as json object



console.log(str);