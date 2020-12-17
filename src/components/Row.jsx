// Packages.
import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

// Components.
import axios from "../axios/axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => alert("Cant find a trailer for this movie :("));
    }
  };

  return (
    <div style={{ marginTop: isLargeRow && "-150px" }} className="text-white">
      <h2 className="text-xl pl-7">{title}</h2>
      <div className="sm:flex overflow-y-hidden overflow-x-hidden p-5">
        {movies.map((movie) => {
          if (movie.poster_path === null || movie.backdrop_path === null)
            return null;
          return (
            <img
              onClick={() => handleClick(movie)}
              className={`w-full object-contain max-h-28 mx-2
              transition duration-450 transform
              hover:scale-110 rounded-xl
              ${isLargeRow && "max-h-72 hover:scale-110"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && (
        <Youtube className="mt-5 mb-8" videoId={trailerUrl} opts={opts} />
      )}
    </div>
  );
};

export default Row;
