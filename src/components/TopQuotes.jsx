import React from "react";
import RbThumbs from "./RbThumbs";
import NavBar from "./NavBar";

const TopQuotes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center font-bold text-redquote text-7xl">
        <h1 className="">TOP QUOTES</h1>
      </div>
      <div className="pt-[10vh]flex flex-col w-screen left-16">
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
