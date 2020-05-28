import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../store/movies";

const Function = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.entities.movies.list);

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  console.log(this.props);
  return (
    <ul>
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Function;
