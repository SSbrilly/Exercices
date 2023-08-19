const user = {
  id: 1,
  name: "John",
  age: 25,
};

const saveUser = (userObject) => {
  try {
    const userJSON = JSON.stringify(userObject);
    localStorage.setItem("user", userJSON);
    console.log("Salvat");
  } catch (error) {
    console.error(`Errore: ${error.message}`);
  }
};

saveUser(user);

const getUserFromLocalStorage = () => {
  try {
    const userJSON = localStorage.getItem("user");
    if (userJSON === null) {
      console.log("Nessun dato utente trovato in localStorage.");
      return;
    }

    const userObject = JSON.parse(userJSON);
    console.log("Dati utente recuperati: ", userObject);
  } catch (error) {
    console.error(`Errore: ${error.message}`);
  }
};

getUserFromLocalStorage();
