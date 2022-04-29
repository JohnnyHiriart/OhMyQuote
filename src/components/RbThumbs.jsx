import React from "react";
import PropTypes from "prop-types";
import QuoteHome from "./QuoteHome";

const RbThumbs = ({ nbr, quote }) => {
  return (
    <div className="flex items-center content-center justify-center m-10">
      <div className="flex mr-[5vw] items-center justify-center text-4xl font-bold text-white rounded-full h-14 bg-redquote w-14">
        {nbr}
      </div>
      <div className="flex items-center content-center justify-center w-3/5 border-4 rounded-lg border-redquote bg-redquote bg-opacity-5">
        <div>{/* first quote img */}</div>
        <div className="h-[10vw] flex items-center">
          <QuoteHome
            textSize="text-[1.2vw]"
            quote={quote}
            padding="p-10"
            height=""
          />
        </div>
        <div>{/* second quote img */}</div>
      </div>
    </div>
  );
};

RbThumbs.propTypes = {
  nbr: PropTypes.string.isRequired,
};

export default RbThumbs;
