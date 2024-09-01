const API_KEY = "eca8176b83a76f5aafb53911b54fa652";
const BASE_URI = `https://api.themoviedb.org/3/`;

const request = {
    fetchTrending: `${BASE_URI}trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${BASE_URI}movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchHorroMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchDocumentaryMovie: `${BASE_URI}discover/movie?api_key=${API_KEY}&language=en-US`,

}

export default request;