import React from "react";
import PropTypes from "prop-types";
import QuoteTop from "./QuoteTop";

const RbThumbsTop = ({ nbr, quoteText, quoteAuthor }) => {
  return (
    <div className="flex items-center content-center md:justify-center md:m-10 xs:m-4 md:ml-10 xs:mr-[0.6rem] xs:ml-[20vw]">
      <div className="xs:scale-[0.4] md:scale-[1] flex md:mr-[5vw] justify-center text-4xl font-bold text-white rounded-full h-14 bg-redquote w-14">
        {nbr}
      </div>
      <div className="flex xs:w-[55vw] xs:h-[20vh] md:h-[20vw] justify-between w-3/5 border-4 rounded-lg md:hover:scale-125 md:hover:ml-16  border-redquote bg-redquote bg-opacity-5">
        {/* box with quote */}
        <div className="flex items-start w-[10vh]">
          <img
            src="/static/img/smal-logo-oh-my-quote2.png"
            alt="opening_quote"
          />
        </div>
        <div className="flex items-center">
          <QuoteTop
            textSize="xs:text-[2.1vw] sm:text-[1.8vw] ms:text-[1.2vw]"
            quoteText={quoteText}
            quoteAuthor={quoteAuthor}
          />
        </div>
        <div className="flex items-end w-[10vh]">
          <img
            src="/static/img/smal-logo-oh-my-quote1.png"
            alt="closing_quote"
          />
        </div>
      </div>
    </div>
  );
};

RbThumbsTop.propTypes = {
  nbr: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
};

export default RbThumbsTop;
