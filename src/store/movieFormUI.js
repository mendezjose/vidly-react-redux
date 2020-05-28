import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

//  Slice

const slice = createSlice({
  name: "movieFormUI",
  initialState: {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  },
  reducers: {
    genresRecived: (movieFormUI, action) => {
      movieFormUI.genres = action.payload;
    },

    movieRecived: (movieFormUI, action) => {
      console.log(mapToViewModel(action.payload));
      movieFormUI.data = mapToViewModel(action.payload);
    },
  },
});

const { genresRecived, movieRecived } = slice.actions;
export default slice.reducer;

//  Actions

export const populateGenres = () =>
  apiCallBegan({
    url: "/genres",
    onSuccess: genresRecived.type,
  });

export const populateMovies = (id) => {
  if (id === "new") return;

  return apiCallBegan({
    url: "/movies/" + id,
    onSuccess: movieRecived.type,
  });
};

function mapToViewModel(movie) {
  return {
    _id: movie._id,
    title: movie.title,
    genreId: movie.genre._id,
    numberInStock: movie.numberInStock,
    dailyRentalRate: movie.dailyRentalRate,
  };
}
