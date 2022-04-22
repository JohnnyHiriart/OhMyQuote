import React from "react";
import QuoteHome from "./QuoteHome"

const RbThumbs = () => {
  return (
    <div className="flex items-center content-center justify-center m-10">
      <div className="flex mr-[5vw] items-center justify-center text-4xl font-bold text-white rounded-full h-14 bg-redquote w-14">
        1
      </div>
      <div className="flex items-center content-center justify-center w-3/5 border-4 rounded-lg border-redquote bg-redquote bg-opacity-5">
        {/* box with quote */}
        <div>{/* first quote img */}</div>
        <div className="h-[10vh] flex items-center"><QuoteHome /></div>
        <div>{/* second quote img */}</div>
      </div>
    </div>
  );
};

export default RbThumbs;
