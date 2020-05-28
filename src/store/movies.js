import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    lastFetch: null,
  },
  reducers: {
    moviesRecived: (movies, action) => {
      movies.list = action.payload;
    },
    movieLiked: (movies, action) => {
      const index = movies.list.findIndex(
        (movie) => movie._id === action.payload._id
      );
      movies.list[index].liked = !movies.list[index].liked;
    },
    movieDeleted: (movies, action) => {
      const index = movies.list.findIndex(
        (movie) => movie._id === action.payload._id
      );
      movies.list.splice(index, 1);
    },
    movieDeletedFailed: (movies, action) => {
      toast.error(action.payload);
    },
  },
});

export const {
  moviesRecived,
  movieLiked,
  movieDeleted,
  movieDeletedFailed,
} = slice.actions;

//  Actions

export const loadMovies = () =>
  apiCallBegan({
    url: "/movies",
    onSuccess: moviesRecived.type,
  });

export const deleteMovie = ({ _id }) =>
  apiCallBegan({
    url: "movvies/" + _id,
    method: "delete",
    onSuccess: movieDeleted.type,
    onError: movieDeletedFailed.type,
  });

export default slice.reducer;
