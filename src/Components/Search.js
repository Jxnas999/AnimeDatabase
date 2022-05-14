import React, { createContext, useEffect, useState } from "react";
import Card from "./Card";

export default function Search() {
  const [search, setSearch] = useState(""); //Such Input
  const [anime, setAnime] = useState([]); // Aktuelle Animes

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": "8cc5ebdbc3msh1e688bb58631a99p173c54jsn8d2625b43db5",
      },
    };

    //Fetch Data
    if (search.length === 0) {
      fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", options)
        .then((response) => response.json())
        .then((response) => setAnime(response.top))
        .catch((err) => console.error(err));
    } else if (search.length > 2) {
      fetch(`https://jikan1.p.rapidapi.com/search/anime?q=${search}`, options)
        .then((response) => response.json())
        .then((response) => setAnime(response.results))
        .catch((err) => console.error(err));
    }
  }, [search]);

  return (
    <div>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Type to Search...'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <Card animeList={anime} />
    </div>
  );
}
