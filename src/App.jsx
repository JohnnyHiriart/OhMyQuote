import React, { useEffect, useState } from "react";
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

  const randomCategories = [
    "age",
    "alone",
    "amazing",
    "anger",
    "anniversary",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communication",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "diet",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "finance",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "gardening",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "motivational",
    "movies",
    "movingon",
    "music",
    "nature",
    "parenting",
    "patience",
    "patriotism",
    "peace",
    "pet",
    "poetry",
    "politics",
    "positive",
    "power",
    "relationship",
    "religion",
    "respect",
    "romantic",
    "sad",
    "science",
    "smile",
    "society",
    "sports",
    "strength",
    "success",
    "sympathy",
    "teacher",
    "technology",
    "teen",
    "thankful",
    "time",
    "travel",
    "trust",
    "truth",
    "war",
    "wedding",
  ];

  // variable qui contient toutes les quotes
  const [quote, setQuote] = useState([]);
  const [onClick, setOnClick] = useState(false);
  const [genre, setGenre] = useState("");
  const [genreRandom, setGenreRandom] = useState(
    randomCategories[getRandomInt(randomCategories.length)]
  );
  const [topQuote, setTopQuote] = useState([]);

  const handleOnClick = () => {
    setOnClick(!onClick);
    setGenreRandom(randomCategories[getRandomInt(randomCategories.length)]);
  };

  useEffect(() => {
    genre !== ""
      ? axios({
          method: "get",
          url: `https://quote-garden.herokuapp.com/api/v3/quotes${
            "?genre=" + genre
          }`,
          params: { page: getRandomInt(10) },
        })
          .then((res) => res.data.data)
          .then((data) => setQuote(data[getRandomInt(data.length)]))
          .catch((err) => console.log(err))
      : axios({
          method: "get",
          url: `https://quote-garden.herokuapp.com/api/v3/quotes${
            "?genre=" + genreRandom
          }`,
          params: { page: getRandomInt(10) },
        })
          .then((res) => res.data.data)
          .then((data) => setQuote(data[getRandomInt(data.length)]))
          .catch((err) => console.log(err));
  }, [onClick, genre, genreRandom]);

  useEffect(() => {
    genre !== ""
      ? axios({
          method: "get",
          url: `https://quote-garden.herokuapp.com/api/v3/quotes${
            "?genre=" + genre
          }`,
          params: { page: getRandomInt(5) },
        })
          .then((res) => res.data.data)
          .then((data) => setTopQuote(data))
          .catch((err) => console.log(err))
      : axios({
          method: "get",
          url: `https://quote-garden.herokuapp.com/api/v3/quotes${
            "?genre=" + genreRandom
          }`,
          params: { page: getRandomInt(5) },
        })
          .then((res) => res.data.data)
          .then((data) => setTopQuote(data))
          .catch((err) => console.log(err));
  }, []);

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
              setGenre={setGenre}
            />
          }
        />
        <Route
          path="/top-quotes"
          element={<TopQuotes quotes={topQuote} setQuote={setQuote} />}
        />
        <Route path="/the-crew" element={<TheCrew />} />
      </Routes>
    </div>
  );
}

export default App;
