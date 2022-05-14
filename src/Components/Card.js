import React from "react";

export default function Card(props) {
  const animeList = props.animeList.map((item) => {
    return (
      <div className='anime--div' key={item.mal_id}>
        <h1 rel='noreferrer'>
          <a>{item.title}</a>
        </h1>

        <img src={item.image_url} alt='Animes'></img>
      </div>
    );
  });
  return <section className='anime--Card'>{animeList}</section>;
}
