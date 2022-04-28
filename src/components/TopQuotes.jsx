import React from "react";
import RbThumbs from "./RbThumbs";
import NavBar from "./NavBar";

const TopQuotes = () => {
  return (
    <div classes="flex content-center justify-center">
      <div>
        <NavBar />
      </div>
      <div className="flex content-center justify-center font-bold text-redquote text-7xl">
        <h1 className="">TOP QUOTES</h1>
      </div>
      <div className="pt-[10vh]flex flex-col w-screen left-16">
        <RbThumbs nbr="1" />
        <RbThumbs nbr="2" />
        <RbThumbs nbr="3" />
        <RbThumbs nbr="4" />
        <RbThumbs nbr="5" />
      </div>
    </div>
  );
};

export default TopQuotes;
