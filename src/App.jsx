import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import QuoteMe from "./components/QuoteMe";
import TopQuotes from "./components/TopQuotes";
import TheCrew from "./components/TheCrew";
import Home from "./components/Home";
import "./App.css";

// import { createClient } from "pexels";

// const client = createClient(
//   "563492ad6f917000010000014f83524bd3fd484793fe9f36a0be2cfe"
// );

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

  const [topQuotes, setTopQuotes] = useState([
    {
      quoteText:
        "We never taste a perfect joy our happiest successes are mixed with sadness.",
      quoteAuthor: "Pierre Corneille",
      rating: 10,
    },
    {
      quoteText:
        "A liberal is a man or a woman or a child who looks forward to a better day, a more tranquil night, and a bright, infinite future.",
      quoteAuthor: "Leonard Bernstein",
      rating: 9,
    },
    {
      quoteText:
        "My mom and dad played this music all the time when I was growing up, so to me songs by Jerry Lee and Fats Domino are the classics, they're the best songs ever.",
      quoteAuthor: "Chris Isaak",
      rating: 8,
    },
    {
      quoteText:
        "My biggest pet peeve are just girls who go to sports bars who have no intention on caring what teams are playing, like they're looking for just a night out. That drives me more crazy than anything else. Like, don't pretend to be a sports fan.",
      quoteAuthor: "Jerry Ferrara",
      rating: 7,
    },
    {
      quoteText:
        "I would say 90 percent of Christians do not have a worldview, in other words a view of the world, based on the Scripture and a relationship with God.",
      quoteAuthor: "Josh McDowell",
      rating: 6,
    },
    {
      quoteText:
        "Falling in love is the best way to kill your heart because then it's not yours anymore. It's laid in a coffin, waiting to be cremated.",
      quoteAuthor: "Ville Valo",
      rating: 5,
    },
    {
      quoteText: "Happiness is a very small desk and a very big wastebasket.",
      quoteAuthor: "Robert Orben",
      rating: 4,
    },
    {
      quoteText:
        "All successful people men and women are big dreamers. They imagine what their future could be, ideal in every respect, and then they work every day toward their distant vision, that goal or purpose.",
      quoteAuthor: "Brian Tracy",
      rating: 3,
    },
    {
      quoteText:
        "It feels great to win and I can't be more thankful to the Lord for walking me through every step. God was and is so faithful every time.",
      quoteAuthor: "Webb Simpson",
      rating: 2,
    },
    {
      quoteText:
        "The only important thing I have to say is that my father never fought against his country.",
      quoteAuthor: "Zinedine Zidane",
      rating: 1,
    },
  ]);

  const [quote, setQuote] = useState({});
  const [onClick, setOnClick] = useState(false);
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState([]);
  const [genreRandom, setGenreRandom] = useState(
    randomCategories[getRandomInt(randomCategories.length)]
  );
  const [actualQuote, setActualQuote] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setOnClick(!onClick);
    setGenreRandom(randomCategories[getRandomInt(randomCategories.length)]);
  };

  const MY_KEY = "563492ad6f91700001000001355f7cfa76ac42c98a7bdff9a57a1ee2";
  useEffect(() => {
    axios
      .get(
        `https://api.pexels.com/v1/search?query=${genre ? genre : genreRandom}`,
        {
          params: { orientation: "landscape" },
          headers: { Authorization: `${MY_KEY}` },
        }
      )
      .then((res) => res.data)
      .then((data) => setImage(data.photos[getRandomInt(data.photos.length)]))
      .catch((err) => console.log(err));
  }, [isOpen]);

  useEffect(() => {
    setActualQuote(quote);
  }, [quote]);

  useEffect(() => {
    genre !== ""
      ? axios({
          method: "get",
          url: `https://quote-garden.herokuapp.com/api/v3/quotes${`?genre=${genre}`}`,
          params: { page: getRandomInt(10) },
        })
          .then((res) => res.data.data)
          .then((data) => setQuote(data[getRandomInt(data.length)]))
          .catch((err) => console.log(err))
      : axios({
          method: "get",
          url: `https://quote-garden.herokuapp.com/api/v3/quotes${`?genre=${genreRandom}`}`,
          params: { page: getRandomInt(10) },
        })
          .then((res) => res.data.data)
          .then((data) => setQuote(data[getRandomInt(data.length)]))
          .catch((err) => console.log(err));
  }, [onClick, genre, genreRandom]);

  const refreshQuotesUp = (topQuotes, actualQuote) => {
    !topQuotes.includes(actualQuote) &&
      setTopQuotes([...topQuotes, actualQuote]);
  };

  const refreshQuotesDown = (topQuotes, actualQuote) => {
    topQuotes.includes(actualQuote) &&
      setTopQuotes(topQuotes.filter((quote) => quote !== actualQuote));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home quote={quote} />} />
        <Route path="/category" element={<Category setGenre={setGenre} />} />
        <Route
          path="/quote-me"
          element={
            <QuoteMe
              image={image}
              quote={quote}
              onClick={() => handleOnClick()}
              genre={genre}
              setGenre={setGenre}
              actualQuote={actualQuote}
              topQuotes={topQuotes}
              refreshQuotesUp={() => refreshQuotesUp(topQuotes, actualQuote)}
              refreshQuotesDown={() =>
                refreshQuotesDown(topQuotes, actualQuote)
              }
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          }
        />
        <Route
          path="/top-quotes"
          element={<TopQuotes topQuotes={topQuotes} setQuote={setQuote} />}
        />
        <Route path="/the-crew" element={<TheCrew />} />
      </Routes>
    </div>
  );
}

export default App;
