import React from "react";
import PropTypes from "prop-types";
import QuoteTop from "./QuoteTop";

const RbThumbsTop = ({ nbr, quoteText, quoteAuthor }) => {
  return (
    <div className="flex items-center content-center justify-center m-10">
      <div className="flex mr-[5vw] justify-center text-4xl font-bold text-white rounded-full h-14 bg-redquote w-14">
        {nbr}
      </div>
      <div className="flex justify-between w-3/5 border-4 rounded-lg hover:scale-125 hover:ml-16 border-redquote bg-redquote bg-opacity-5">
        {/* box with quote */}
        <div className="flex items-start w-[10vh]">
          <img
            src="/static/img/smal-logo-oh-my-quote2.png"
            alt="opening_quote"
          />
        </div>
        <div className="h-[10vw] flex items-center">
          <QuoteTop
            textSize="text-[1.2vw]"
            quoteText={quoteText}
            quoteAuthor={quoteAuthor}
            padding="p-10"
            height=""
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
