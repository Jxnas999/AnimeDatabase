import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  let navigate = useNavigate();
  const n = 33;
  const animeList = props.animeList.map((item) => {
    return (
      <div className='anime--div' key={item.mal_id}>
        <h3 rel='noreferrer'>
          {item.title.length > n //Shorten the Title
            ? item.title.substr(0, n - 1) + "..."
            : item.title}
        </h3>
        <img src={item.image_url} alt='Animes'></img>
        <button
          onClick={(e) => {
            navigate(`/anime/${item.mal_id}`);
          }}
        >
          More
        </button>
      </div>
    );
  });

  return <div className='anime--Card'>{animeList}</div>;
}
