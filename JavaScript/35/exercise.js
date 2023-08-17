function repeatHello(callback) {
  setInterval(callback, 1000);
}

const printHello = () => {
  console.log("Hello");
};

repeatHello(printHello);

//Using an arrow function in this scenario is considered
//a best practice to avoid any issues related to the this
//context and maintain a consistent scope for the callback.
