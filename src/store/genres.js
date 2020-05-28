import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// Slice
const slice = createSlice({
  name: "genres",
  initialState: {
    list: [],
  },
  reducers: {
    genresRecived: (genres, action) => {
      genres.list = [{ _id: "", name: "All Genres" }, ...action.payload];
    },
  },
});

const { genresRecived } = slice.actions;

//  Actions
export const loadGenres = () =>
  apiCallBegan({
    url: "/genres",
    onSuccess: genresRecived.type,
  });

export default slice.reducer;
