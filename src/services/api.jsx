const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = '04410cb9529346f79ec1f657731e9f8f';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${KEY}&language=en-US&page=3`
  );
}

export function fetchSearch(newImput) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${newImput}`
  );
}

export function fetchMovieDetails(moviesId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${moviesId}?api_key=${KEY}`);
}

export function fetchMovieCredits(moviesId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${moviesId}/credits?api_key=${KEY}`
  );
}

export function fetchMovieReviews(moviesId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${moviesId}/reviews?api_key=${KEY}`
  );
}
