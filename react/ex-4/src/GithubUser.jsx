import React from "react";
import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {
  const { user, isLoading, isError, refetch } = useGithubUser(username);

  if (isLoading) {
    return <p>Caricamento...</p>;
  }

  if (isError) {
    return <p>Errore nel caricamento dei dati utente</p>;
  }

  return (
    <div>
      <h2>Profilo Utente Github</h2>
      {user ? (
        <div>
          <p>Nome: {user.name}</p>
          <p>Posizione: {user.location}</p>
        </div>
      ) : (
        <p>Nessun utente selezionato</p>
      )}

      <button onClick={refetch}>Aggiorna Dati</button>
    </div>
  );
}

export default GithubUser;
