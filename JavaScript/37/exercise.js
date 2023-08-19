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

value()
  .then((data) => {
    console.log(`Number: ${data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
