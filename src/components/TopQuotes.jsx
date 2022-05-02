import React from "react";
import RbThumbs from "./RbThumbs";
import NavBar from "./NavBar";

const TopQuotes = ({ quotes, setQuote }) => {
  return (
    <div classes="flex content-center justify-center">
      <div>
        <NavBar />
      </div>
      <div className="flex content-center justify-center font-bold text-redquote pl-20 text-[6vw]">
        <h1 className="">TOP QUOTES</h1>
      </div>
      <div className="flex flex-col w-screen left-16">
        {quotes.map((quote, index) => (
          <RbThumbs
            nbr={`${index + 1}`}
            quote={quote}
            setQuote={setQuote}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TopQuotes;
