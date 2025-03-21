import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

function Banner({ heading, description, imageId }) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const [videoKey, setVideoKey] = useState("");
  const handleOpenPlayer = () => {
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
  };

  useEffect(() => {
    (async function getImageId() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${imageId}/videos?api_key=eca8176b83a76f5aafb53911b54fa652`
      );
      const { results } = await response.json();
      const [{ key } = {}] = results || [];
      setVideoKey(key);
    })();
  }, []);

  return (
    <>
      <div className="overscroll-none lg:flex flex-col text-white h-screen justify-center p-14 items-start">
        <div className="text-[300%] lg:text-9xl font-bold mb-3">{heading}</div>
        <div className="flex gap-5 mb-4">
          <button
            className="bg-[#2F2F34] rounded p-2 w-32 text-1xl font-semibold hover:bg-white hover:text-black"
            onClick={handleOpenPlayer}
          >
            Play
          </button>
          {isPlayerOpen && (
            <VideoPlayer
              videoUrl={`https://www.youtube.com/embed/${videoKey}`}
              onClose={handleClosePlayer}
            />
          )}
          <button className="bg-[#2F2F34] rounded p-2 w-32 text-center-1xl font-semibold hover:bg-white hover:text-black">
            My List
          </button>
        </div>
        <div className="text-base md:text-lg lg:text-2xl font-bold w-full lg:w-[80%] text-wrap break-words">
          {description}
        </div>
      </div>
    </>
  );
}
export default Banner;
