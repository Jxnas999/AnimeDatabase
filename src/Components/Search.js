import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { AnimeContext } from "../Contexts/Context";
import axios from "axios";
export default function Search() {
  const [search, setSearch] = useState(""); //Such Input
  //const [anime, setAnime] = useState([]); // Aktuelle Animes
  const { anime, setAnime } = useContext(AnimeContext);
  console.log("mount");
  useEffect(() => {
    const defaultOptions = {
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/top/anime/1/upcoming",
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_ANIMEAPI_KEY}`,
      },
    };
    const searchOptions = {
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/search/anime",
      params: { q: `${search}` },
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": "8cc5ebdbc3msh1e688bb58631a99p173c54jsn8d2625b43db5",
      },
    };

    //Fetch Data
    if (search.length === 0) {
      //If there is no Search typed in: Display the Top Animes
      axios
        .request(defaultOptions)
        .then(function (response) {
          setAnime(response.data.top);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else if (search.length > 2) {
      //If 2 Characters are Typed in constantly fetch Api after search
      axios
        .request(searchOptions)
        .then(function (response) {
          setAnime(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [search, setAnime]);

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
