const isLogged = true;

const login = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      let number = Math.random();
      resolve(number);
    } else {
      reject(new Error("Not logged in"));
    }
  });
};

const data = (math) => {
  return new Promise((resolve, reject) => {
    if (math > 0.5) {
      const obj = {
        name: "Simone",
        age: "32",
      };
      resolve(obj);
    } else {
      reject(new Error(`Error: ${math}`));
    }
  });
};

const dataRes = (obj) => {
  console.log(obj);
};

login(isLogged)
  .then(data)
  .then(dataRes)
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise chain completed."));
