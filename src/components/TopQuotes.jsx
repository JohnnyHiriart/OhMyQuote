import React from "react";
import RbThumbs from "./RbThumbs";
import NavBar from "./NavBar";

const TopQuotes = ({ quotes }) => {
  console.log(quotes);
  return (
    <div classes="flex content-center justify-center">
      <div>
        <NavBar />
      </div>
      <div className="flex content-center justify-center font-bold text-redquote text-7xl">
        <h1 className="">TOP QUOTES</h1>
      </div>
      <div className="p-[5vh] flex flex-col w-screen left-16">
        {quotes.map((quote, index) => (
          <RbThumbs nbr={`${index + 1}`} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default TopQuotes;
