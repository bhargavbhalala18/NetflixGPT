import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("090909", movies);
  if (!movies) return;
  return (
    <div className="px-6 py-2">
      <h1 className="text-3xl text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll  ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
