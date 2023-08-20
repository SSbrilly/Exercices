import React from "react";
import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {
  const userData = useGithubUser(username);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Github User Profile</h2>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Username:</strong> {userData.login}
      </p>
      <p>
        <strong>Followers:</strong> {userData.followers}
      </p>
      <p>
        <strong>Following:</strong> {userData.following}
      </p>
    </div>
  );
}

export default GithubUser;
