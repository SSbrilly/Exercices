function printAsyncName() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000);
}

setInterval(printAsyncName, 2000);

printAsyncName();

