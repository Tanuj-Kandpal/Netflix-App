import { useState } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Row from "../Components/Row";
import { image_baseuri } from "../HelperFiles/constants.jsx";
import useMovies from "../Hooks/useMovies";
import request from "../request";

function Netflix() {
  const [loading] = useState(false);
  const randomNum = Math.floor(Math.random() * 20);
  const netflixDataValue = useMovies(request.fetchNetflixOriginals);
  const finalImage = `${image_baseuri}${netflixDataValue[randomNum]?.backdrop_path}`;

  return (
    <>
      <div className="bg-[#111111] scroll-smooth">
        {/* Show loading indicator if data is still loading */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("${finalImage}")`,
              backgroundRepeat: "no-repeat",
              height: "100%",
            }}
          >
            <Navbar />
            <Banner
              poster={netflixDataValue[randomNum]?.backdrop_path}
              heading={netflixDataValue[randomNum]?.original_title}
              description={netflixDataValue[randomNum]?.overview}
              imageId={netflixDataValue[randomNum]?.id}
            />
          </div>
        )}
        ;
        <Row
          heading={"Netflix Originals"}
          fetchUrl={request.fetchNetflixOriginals}
        />
        <Row heading={"Trending Now"} fetchUrl={request.fetchTrending} />
        <Row heading={"Top Rated"} fetchUrl={request.fetchTopRated} />
        <Row heading={"Action"} fetchUrl={request.fetchActionMovie} />
        <Row heading={"Comedy"} fetchUrl={request.fetchComedyMovie} />
        <Row heading={"Horror"} fetchUrl={request.fetchHorroMovie} />
        <Row heading={"Romance"} fetchUrl={request.fetchRomanceMovie} />
        <Row heading={"Documentry"} fetchUrl={request.fetchDocumentaryMovie} />
      </div>
    </>
  );
}

export default Netflix;
