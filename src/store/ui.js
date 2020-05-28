import { combineReducers } from "redux";
import moviesUIReducer from "./moviesUI";
import movieFormReducer from "./movieFormUI";

export default combineReducers({
  moviesUI: moviesUIReducer,
  movieFormUI: movieFormReducer,
});
