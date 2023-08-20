import React from "react";
import "./App.css";
import GithubUser from "./GithubUser";
import useGithubUser from "./useGithubUser";

function App() {
  const username = "SSbrilly";
  const userData = useGithubUser(username);

  return (
    <div className="App">
      <h1>GitHub User App</h1>
      <GithubUser username={username} />
    </div>
  );
}

export default App;
