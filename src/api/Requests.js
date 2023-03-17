const API_KEY = 'f81980ff410e46f422d64ddf3a56dddd';
const URL = 'https://api.themoviedb.org/3';

const requests = {
    fetchTrending: `${URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;