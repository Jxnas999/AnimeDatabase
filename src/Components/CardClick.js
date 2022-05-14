import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CardClick.css";
export default function CardClick() {
  let { id } = useParams();
  const [activeAnime, setactiveAnime] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": "8cc5ebdbc3msh1e688bb58631a99p173c54jsn8d2625b43db5",
      },
    };
    fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${id}`, options)
      .then((response) => response.json())
      .then((response) => setactiveAnime(response.results[0]))
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div className='Card--Click'>
      <img src={activeAnime.image_url} alt='Animes'></img>

      <section className='info'>
        <h1>{activeAnime.title}</h1>
        <p>
          <a href={activeAnime.url} target='_blank' rel='noreferrer'>
            Learn More
          </a>
        </p>
      </section>
    </div>
  );
}
