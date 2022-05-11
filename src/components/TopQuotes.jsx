import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import RbThumbsTop from "./RbThumbsTop";

const TopQuotes = ({ setQuote, topQuotes }) => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex content-center justify-center font-bold text-redquote pl-20 text-[6vw]">
        <h1 className="">TOP QUOTES</h1>
      </div>
      <div className="flex flex-col w-screen">
        {topQuotes.map((quote, index) => (
          <div onClick={() => setQuote(quote)} key={index}>
            <Link to="/quote-me">
              <RbThumbsTop
                nbr={`${index + 1}`}
                quoteText={quote.quoteText}
                quoteAuthor={quote.quoteAuthor}
                index={index}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

TopQuotes.propTypes = {
  topQuotes: PropTypes.arrayOf(
    PropTypes.shape({
      quoteText: PropTypes.string,
      quoteAuthor: PropTypes.string,
    })
  ).isRequired,
  setQuote: PropTypes.func.isRequired,
};

export default TopQuotes;
