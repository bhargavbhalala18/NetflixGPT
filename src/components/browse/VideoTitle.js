import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-20 absolute text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6  text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-lg px-10 py-2 hover:bg-opacity-80">
          &#9658; <span className="px-1">Play</span>
        </button>
        <button className="mx-2 bg-gray-500 opacity-50 text-white text-lg rounded-lg px-10 py-2 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
