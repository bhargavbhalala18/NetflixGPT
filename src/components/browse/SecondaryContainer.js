import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, upComingMovies, topRatedMovies } =
    movies;
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20 pl-12">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
