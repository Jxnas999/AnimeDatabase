import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CardClick.css";
import { AnimeContext } from "../Contexts/Context";
import { FaStar } from "react-icons/fa";

export default function CardClick() {
  let { id } = useParams();
  let parseId = parseInt(id); // Convert to Integer, that comparision is possible
  console.log("mount");
  const { anime } = useContext(AnimeContext);
  const [activeAnime, setActiveAnime] = useState([]);

  useEffect(() => {
    anime.forEach((item) => {
      if (item.mal_id === parseId) {
        return setActiveAnime(item);
      }
    });
  }, [anime, parseId]);

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
