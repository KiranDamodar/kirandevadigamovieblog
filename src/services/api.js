const API_KEY ="4f8eb8f192ed6271bb695a3d203051bd";
const BASE_URL = "https://api.themoviedb.org"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
  
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  console.log(data.results)
  return data.results;
};

