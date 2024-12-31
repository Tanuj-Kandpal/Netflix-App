import { useEffect, useState } from "react";

function useMovies(movie) {
  const [netflixData, setNetflixData] = useState([]);
  useEffect(() => {
    (async function data() {
      try {
        const response = await fetch(movie);
        const res = await response.json();
        const { page, results } = res;
        setNetflixData(results);
      } catch (error) {
        console.error("Error loading netflix data: ", error);
      }
    })();
    //unmounting phase
    return () => {};
  }, []);
  console.log(netflixData);

  return netflixData;
}

export default useMovies;
