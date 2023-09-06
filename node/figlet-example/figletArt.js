const figlet = require("figlet");

const text = "Simone";

figlet(text, function (err, data) {
  if (err) {
    console.log(err);

    return;
  }
  console.log(data);
});
