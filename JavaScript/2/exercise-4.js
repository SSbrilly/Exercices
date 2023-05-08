function nicknameMap(persons) {
  let nicknames1 = [];
  for (let index = 0; index < persons.length; index++) {
    nicknames1.push(persons[index].name + "-" + persons[index].age);
  }
  return nicknames1;
}

function nicknameMap(persons) {
  let nicknames1 = [];
  for (let index of persons) {
    nicknames1.push(index.name + "-" + index.age);
  }
  return nicknames1;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);
