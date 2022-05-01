const API_KEY = "7b1b82b28936f56a5e95ceaa45624fad";

const req = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-genres=99`,
  trailerQuery: `/videos?api_key=${API_KEY}`,
};
export default req;
