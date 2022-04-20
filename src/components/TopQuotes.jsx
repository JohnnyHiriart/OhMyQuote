import React from "react";
import RbThumbs from "./RbThumbs";
import NavBar from "./NavBar";

const TopQuotes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="fixed left-10 w-screen">
        <RbThumbs />
      </div>
    </div>
  );
};

export default TopQuotes;
