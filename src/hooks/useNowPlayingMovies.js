import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // Get Data from TMDB API and store it in
  const getNowPlayingMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
};

export default useNowPlayingMovies;
