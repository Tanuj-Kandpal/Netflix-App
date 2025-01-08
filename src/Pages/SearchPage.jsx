import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { image_baseuri } from "../HelperFiles/constants";
import ShimmerPage from "./../Components/Shimmer";
import ErrorPage from "./ErrorPage";

const tokenId = import.meta.env.VITE_TOKEN_ID;

function SearchPage() {
  const location = useLocation();
  const input = location.state;
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: tokenId,
    },
  };

  useEffect(
    function () {
      if (!input) return;
      setIsLoading(true);
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setResponse(json))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    },
    [input, url]
  );
  if (!input)
    return (
      <p>
        <ErrorPage />
      </p>
    );
  if (isLoading)
    return (
      <p>
        <ShimmerPage />
      </p>
    );
  //The below piece of code making it work
  if (!response?.results)
    return (
      <p>
        <ShimmerPage />
      </p>
    );

  return (
    <>
      <div className="bg-black h-screen">
        <Navbar />
        <div className="flex flex-wrap gap-8 p-10 max-h-max justify-center bg-black ">
          {response?.results.map(function (curr) {
            if (curr?.backdrop_path && curr?.overview) {
              return (
                <div key={curr.id} className="text-white w-72">
                  <img
                    className="w-72 rounded-md hover:scale-105 transition-all"
                    src={`${image_baseuri}${curr?.backdrop_path || ""}`}
                    alt="Movie Backdrop"
                  />
                  <div className="pt-2 text-lg font-bold text-center">
                    {curr?.title}
                  </div>
                  <div className="pt-3">{curr?.overview}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
