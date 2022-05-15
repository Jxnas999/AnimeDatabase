import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../CardClick.css";
import { AnimeContext } from "../Contexts/Context";
export default function CardClick() {
  let { id } = useParams();
  const {anime, setAnime} = useContext(AnimeContext)
  const [activeAnime, setActiveAnime] = useState('Test')
 
  for(let i = 0; i<anime.length; i++){
  if(anime[i].mal_id === id){
    console.log(anime[i])
  }
}


  return (
    <div className='Card--Click'>
      
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
