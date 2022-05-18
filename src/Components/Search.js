import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { AnimeContext } from "../Contexts/Context";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState(""); //Such Input
  //const [anime, setAnime] = useState([]); // Aktuelle Animes
  const { anime, setAnime } = useContext(AnimeContext);

  useEffect(() => {
    const defaultOptions = {
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/top/anime/1/upcoming",
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      },
    };
    const searchOptions = {
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/search/anime",
      params: { q: `${search}` },
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
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
          className='form--input'
          placeholder='Type to Search...'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          id='search'
        />
      </div>
      <Card animeList={anime} />
    </div>
  );
}
