import { combineReducers } from "redux";
import genresReducer from "./genres";
import moviesReducer from "./movies";

export default combineReducers({
  genres: genresReducer,
  movies: moviesReducer,
});
