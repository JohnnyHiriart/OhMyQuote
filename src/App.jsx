import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import QuoteMe from "./components/QuoteMe";
import TopQuotes from "./components/TopQuotes";
import TheCrew from "./components/TheCrew";
import Home from "./components/Home";

import "./App.css";

function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // variable qui contient toutes les quotes
  const [quote, setQuote] = useState([]);
  const [onClick, setOnClick] = useState(false);
  const [genre, setGenre] = useState("love");
  const [topQuote, setTopQuote] = useState([]);

  const handleOnClick = () => {
    setOnClick(!onClick);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://quote-garden.herokuapp.com/api/v3/quotes${
        "?genre=" + genre
      }`,
      params: { page: getRandomInt(5) },
    })
      .then((res) => res.data.data)
      .then((data) => setQuote(data[getRandomInt(data.length)]))
      .catch((err) => console.log(err));
  }, [onClick, genre]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://quote-garden.herokuapp.com/api/v3/quotes${
        "?genre=" + genre
      }`,
      params: { page: getRandomInt(5) },
    })
      .then((res) => res.data.data)
      .then((data) => setTopQuote(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(genre);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home quote={quote} />} />
        <Route path="/category" element={<Category setGenre={setGenre} />} />
        <Route
          path="/quote-me"
          element={
            <QuoteMe
              quote={quote}
              onClick={() => handleOnClick()}
              genre={genre}
            />
          }
        />
        <Route path="/top-quotes" element={<TopQuotes quotes={topQuote} />} />
        <Route path="/the-crew" element={<TheCrew />} />
      </Routes>
    </div>
  );
}

export default App;
