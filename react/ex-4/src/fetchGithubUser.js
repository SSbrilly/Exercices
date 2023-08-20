import useSWR from "swr";

async function fetchGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

function useGithubUser(username) {
  if (!username) {
    return {
      user: null,
      isLoading: false,
      isError: false,
    };
  }

  const { data, error } = useSWR(username, fetchGithubUser);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useGithubUser;
