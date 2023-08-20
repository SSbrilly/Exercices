import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [inputUsername, setInputUsername] = useState("");

  const handleAddUsername = () => {
    if (inputUsername.trim() !== "") {
      setUsernames((prevUsernames) => [...prevUsernames, inputUsername]);
      setInputUsername("");
    }
  };

  return (
    <div>
      <h2>Github User List</h2>
      <div>
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder="Enter a GitHub username"
        />
        <button onClick={handleAddUsername}>Add User</button>
      </div>
      <div>
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}

export default GithubUserList;
