import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  let navigate = useNavigate();
  const animeList = props.animeList.map((item) => {
    return (
      <div className='anime--div' key={item.mal_id}>
        <h1 rel='noreferrer'>
          <p
            onClick={(e) => {
              navigate(`/anime/${item.mal_id}`);
            }}
          >
            {item.title}
          </p>
        </h1>

        <img src={item.image_url} alt='Animes'></img>
      </div>
    );
  });
  return <section className='anime--Card'>{animeList}</section>;
}
