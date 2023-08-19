const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveUser = (userObject) => {
  try {
    const userJSON = JSON.stringify(userObject);
    localStorage.setItem("user", userJSON);
    console.log("Saved");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

saveUser(user);
