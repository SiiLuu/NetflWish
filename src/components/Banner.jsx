// Packages.
import React, { useState, useEffect } from "react";

// Components.
import axios from "../axios/axios";
import requests from "../axios/requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="text-white object-contain h-448px"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-7 pt-48 pb-40">
        <h1 className="text-5xl font-extrabold pb-1">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="w-1/3 pt-4 text-sm max-w-lg h-28">
          {truncate(movie?.overview, 150)}
        </h1>
        <div>
          <button
            onClick={() => alert("Pas disponible")}
            className="cursor-pointer text-white outline-none border-none font-bold
            rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-gray-700 bg-opacity-50
            hover:text-black hover:bg-white transition ease-out duration-500"
          >
            Play
          </button>
          <button
            onClick={() => alert("Pas disponible")}
            className="cursor-pointer text-white outline-none border-none font-bold
          rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-gray-700 bg-opacity-50
          hover:text-black hover:bg-white transition ease-in-out duration-500"
          >
            My List
          </button>
        </div>
      </div>
      <div
        style={{
          height: "6rem",
          backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.50), #141414)",
        }}
      />
    </header>
  );
};

export default Banner;
