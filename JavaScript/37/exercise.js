const number = 15;

function value() {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("Greater");
    } else if (number <= 10) {
      resolve("Minor");
    } else if (typeof number !== "number") {
      reject("Not a number");
    }
  });
}

function resolve(data) {
  console.log(`Number: ${data}`);
}

function reject(error) {
  console.log(`Error: ${error}`);
}

value()
    .then(resolve)
    .catch(reject);
