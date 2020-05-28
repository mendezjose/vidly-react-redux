import http from "./httpService";
import { apiUrl } from "../config.json";

function movieUrl(id) {
  return `${apiUrl}/movies/${id}`;
}

export function getMovies() {
  return http.get(apiUrl + "/movies");
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  } else {
    const body = { ...movie };
    delete body._id;
    return http.post(apiUrl + "/movies", body);
  }
}
