import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 rounded-sm">
      <img
        alt="movie card"
        className="rounded-sm"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
