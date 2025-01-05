import { useEffect, useState } from "react";

function useSearch(searchText, fn) {
  const [response, setResponse] = useState();
  useEffect(
    function () {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2E4MTc2YjgzYTc2ZjVhYWZiNTM5MTFiNTRmYTY1MiIsIm5iZiI6MTcyNDkzNDU0My44NzY5OTk5LCJzdWIiOiI2NmQwNjk4ZjA3OTAzN2JkZjEwMzJkNjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4jKIOhdU0eJ3eByi9u2xg5gNFnZxBNeiWdUkRJ5yPIk",
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setResponse(json))
        .catch((err) => console.error(err));

      return response;
    },
    [fn]
  );
}

export default useSearch;
