// const API_KEY = "eca8176b83a76f5aafb53911b54fa652";
const API_KEY = import.meta.env.VITE_MOIVE_API_KEY;
const BASE_URI = import.meta.env.VITE_MOVIE_BASE_URI;

const request = {
    fetchTrending: `${BASE_URI}trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${BASE_URI}movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default request;