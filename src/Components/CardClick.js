import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CardClick.css";
import { AnimeContext } from "../Contexts/Context";
import { FaStar } from "react-icons/fa";

export default function CardClick() {
  let { id } = useParams();
  let parseId = parseInt(id); // Convert to Integer, that comparision is possible

  const { anime, setAnime } = useContext(AnimeContext);
  const [activeAnime, setActiveAnime] = useState([]);
  console.log(anime);
  useEffect(() => {
    anime.filter((item) => {
      if (item.mal_id === parseId) {
        return setActiveAnime(item);
      }
    });
  }, []);

  return (
    <div className='Card--Click'>
      <img src={activeAnime.image_url} alt='Animes'></img>

      <section className='info'>
        <h1>{activeAnime.title}</h1>
        <section className='ranking'>
          <FaStar id='icon' />
          <p>Popularity : {activeAnime.rank}</p>
        </section>
        <p>
          <a href={activeAnime.url} target='_blank' rel='noreferrer'>
            Learn More
          </a>
        </p>
      </section>
    </div>
  );
}

/*
<img src={anime.image_url} alt='Animes'></img>

      <section className='info'>
        <h1>{anime.title}</h1>
        <p>
          <a href={anime.url} target='_blank' rel='noreferrer'>
            Learn More
          </a>
        </p>
      </section>
      */
