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
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur
          porro veritatis ut asperiores expedita ad officia nulla ipsam
          laboriosam est laudantium tempore labore quod dolore amet enim quas
          repellat totam voluptate necessitatibus cum. Velit provident
          consectetur nam obcaecati omnis, consequatur odio alias ipsa
          reprehenderit perferendis adipisci assumenda blanditiis commodi nobis
          explicabo cumque inventore dolore. Quos nostrum fugit cupiditate
          doloremque numquam ipsum aliquam ex laudantium temporibus dolores, at
          ratione! Quod nemo, unde facere saepe ipsam iusto nesciunt? Nulla
          dolorum asperiores sint nemo odio aliquid autem quaerat minus
          assumenda voluptates optio quibusdam minima alias repellendus, unde
          provident incidunt at odit ipsa enim. Distinctio nisi culpa
          reprehenderit magni nobis alias ullam, officia itaque repellat,
          exercitationem earum eveniet modi, praesentium consectetur iusto sint?
          Sunt rerum, maiores harum earum quod ullam ad eos est corporis natus,
          magni impedit a incidunt ea ducimus at enim aut molestiae nulla
          expedita fugit? Atque exercitationem debitis odio ullam earum facilis?
          Ullam modi eligendi amet voluptate veritatis. Minima enim incidunt
          voluptate magnam assumenda inventore blanditiis amet rem, consequatur
          recusandae nostrum earum ratione, iure iusto praesentium quia?
          Explicabo, autem? Unde quibusdam sequi sunt accusamus cum dolorem
          autem odit. Molestias saepe mollitia, animi unde sunt beatae? Aliquid
          officia officiis commodi`,
            150
          )}
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
