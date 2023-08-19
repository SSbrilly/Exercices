function printAsyncName(callback, name) {
  setTimeout(() => {
    console.log("Hello");
    callback(name)
  }, 1000);
}

const printname = (name) => {
  setInterval(() => {
    console.log(name);
  }, 2000);
}

printAsyncName(printname, "Simone");

