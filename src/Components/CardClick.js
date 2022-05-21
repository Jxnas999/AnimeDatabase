import React, { useState, useContext, useEffect, Component } from "react";
import {} from "react-router-dom";
import "../styles/CardClick.css";
import { AnimeContext } from "../Contexts/Context";
import { FaStar } from "react-icons/fa";

export default function CardClick() {
  //let { id } = useParams();
  let id = window.location.href.split("/")[4];
  let parseId = parseInt(id); // Convert to Integer, that comparision is possible
  const { anime } = useContext(AnimeContext);
  const [activeAnime, setActiveAnime] = useState([]);
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([
    { username: "", comment: "" },
  ]);
  let localAnime;

  useEffect(() => {
    if (anime.length !== 0) {
      anime.forEach((item) => {
        if (item.mal_id === parseId) {
          localAnime = item; //needs to be saved in a local value otherwise the context will not get updated and when the user reloads the page the activeAnime state is undefined but still shown
          return setActiveAnime(item);
        }
      });

      if (activeAnime) {
        window.localStorage.setItem("ANIMES", JSON.stringify(localAnime));
      }
    }
    if (anime.length === 0) {
      const data = window.localStorage.getItem("ANIMES");
      setActiveAnime(JSON.parse(data));
    }
  }, [parseId]);

  function handleSubmit(e) {
    e.preventDefault();
    setCommentArray((prevComment) =>
      prevComment.concat({ username: "", comment: comment })
    );
  }
  const commentMap = commentArray.map((item) => {
    return (
      <div className='usersComment' key={parseId}>
        <p>{item.comment}</p>
      </div>
    );
  });
  return (
    <>
      <div className='wrapper'></div>
      <section className='Card--Click'>
        <img src={activeAnime.image_url} alt='Animes'></img>
        <section className='info'>
          <h1>{activeAnime.title}</h1>
          <section className='ranking'>
            <FaStar id='icon' />
            <p>Popularity : {activeAnime.rank}</p>
          </section>

          <a
            className='animeLink'
            href={activeAnime.url}
            target='_blank'
            rel='noreferrer'
          >
            More
          </a>
        </section>
      </section>
      <div className='comment-section'>
        <h1 className='comments'>Comments</h1>
        <section className='button-section'>
          <textarea
            cols='10'
            rows='5'
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <input
            type='button'
            className='comment-btn'
            onClick={handleSubmit}
            value='Comment'
          />
        </section>
        {commentMap}
      </div>
    </>
  );
}
