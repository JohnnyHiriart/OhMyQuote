import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const QuoteHome = ({ padding, height, textSize }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // variable qui contient toutes les quotes
  const [quoteDay, setQuoteDay] = useState([]);

  // au chargement, aller chercher une quote
  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes")
      .then((res) => res.data.data)
      .then((data) => setQuoteDay(data[getRandomInt(data.length)]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={`flex ${padding} ${textSize} flex-col items-center ${height}`}
    >
      <p className="max-w-[850px]">{quoteDay.quoteText}</p>
      <p className="font-bold">{quoteDay.quoteAuthor}</p>
    </div>
  );
};

QuoteHome.propTypes = {
  padding: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
};

export default QuoteHome;
