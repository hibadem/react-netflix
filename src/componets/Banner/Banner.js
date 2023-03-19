import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "axios";
import requests from "../../api/Requests";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const fetchData = async () => {
    const response = await axios.get(requests.fetchNetflixOriginals);
    const results = response.data.results;
    setMovie(results[Math.floor(Math.random() * results.length)]);
    return response;
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const truncate = (string, char) => {
    return string?.length > char
      ? string.substring(0, char - 1) + "..."
      : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(
            movie?.overview,
            150
          )}
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
