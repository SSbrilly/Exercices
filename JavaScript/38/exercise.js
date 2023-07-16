const isLogged = true;

function login() {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      let number = Math.random();
      resolve(number);
    } else {
      reject("Not logged in");
    }
  });
}

function data(math) {
  return new Promise((resolve, reject) => {
    if (math > 0.5) {
      const obj = {
        name: "John",
        age: 24,
      };
      resolve(obj);
    } else {
      reject(`Error: ${math}`);
    }
  });
}

function dataRes(obj) {
  console.log(obj);
  return obj;
}

login(isLogged)
  .then(data)
  .then(dataRes)
  .catch((err) => console.error(err));
