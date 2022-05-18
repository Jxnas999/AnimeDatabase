import { useState } from "react";
import Search from "./Components/Search";
import ErrorPage from "./Components/ErrorPage";
import CardClick from "./Components/CardClick";
import { AnimeContext } from "./Contexts/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";

export default function App() {
  const [anime, setAnime] = useState([]); // Aktuelle Animes

  return (
    <Router>
      <AnimeContext.Provider value={{ anime, setAnime }}>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/anime/:id' element={<CardClick />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AnimeContext.Provider>
    </Router>
  );
}
