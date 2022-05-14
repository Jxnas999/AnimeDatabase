import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./Components/Search";
import ErrorPage from "./Components/ErrorPage";
import CardClick from "./Components/CardClick";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/anime/:id' element={<CardClick />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  </Router>
);
