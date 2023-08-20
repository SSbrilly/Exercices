import React from "react";
import GithubUser from "./GithubUser"; // Importa il componente GithubUser

function ShowGithubUser({ match }) {
  const { username } = match.params;

  return (
    <div>
      <h2>Profilo utente Github</h2>
      <GithubUser username={username} />
    </div>
  );
}

export default ShowGithubUser;
