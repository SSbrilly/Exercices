import React, { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, [username]);

  return (
    <div>
      <h2>Github User Profile</h2>
      {userData ? (
        <div>
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GithubUser;
