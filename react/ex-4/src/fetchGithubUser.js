import useSWR from "swr";

function fetchGithubUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((response) =>
    response.json()
  );
}

function useGithubUser(username) {
  const { data, error } = useSWR(username, fetchGithubUser);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
