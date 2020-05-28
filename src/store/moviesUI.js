import { createSlice } from "@reduxjs/toolkit";

//  Slice

const slice = createSlice({
  name: "moviesUI",
  initialState: {
    selectedGenre: null,
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  },
  reducers: {
    genreSelected: (moviesUI, action) => {
      moviesUI.selectedGenre = action.payload;
      moviesUI.currentPage = 1;
      moviesUI.searchQuery = "";
    },
    pageChanged: (moviesUI, action) => {
      moviesUI.currentPage = action.payload;
    },
    sortColumnChanged: (moviesUI, action) => {
      moviesUI.sortColumn = action.payload;
    },
    querySearchChanged: (moviesUI, action) => {
      moviesUI.searchQuery = action.payload;
      moviesUI.currentPage = 1;
      moviesUI.selectedGenre = null;
    },
  },
});

export default slice.reducer;

export const {
  genreSelected,
  pageChanged,
  sortColumnChanged,
  querySearchChanged,
} = slice.actions;
