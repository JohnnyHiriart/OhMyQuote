import React from "react";
import RbThumbs from "./RbThumbs";
import NavBar from "./NavBar";

const TopQuotes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="fixed flex justify-center font-bold text-redquote text-7xl">
        <h1>TOP QUOTES</h1>
      </div>
      <div className="flex flex-col w-screen left-16">
        <RbThumbs />
        <RbThumbs />
        <RbThumbs />
        <RbThumbs />
        <RbThumbs />
        <RbThumbs />
      </div>
    </div>
  );
};

export default TopQuotes;
