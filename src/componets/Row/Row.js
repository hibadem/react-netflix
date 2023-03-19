import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Row.scss";
import { imageBaseUrl } from "../../api/Requests";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <img
          src={`${imageBaseUrl}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
        />
      ))}
    </div>
  );
};
export default Row;
