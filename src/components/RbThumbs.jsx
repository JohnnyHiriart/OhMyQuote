import React from "react";

const RbThumbs = () => {
  return (
    <div className="flex items-center content-center justify-center pt-20 m-10">
      <div className="flex items-center justify-center text-4xl font-bold text-white rounded-full h-14 bg-redquote w-14">
        1
      </div>
      <div className="flex content-center justify-center w-3/4 m-10 border-8 rounded-xl border-redquote bg-redquote bg-opacity-5">
        {/* box with quote */}
        <div>{/* first quote img */}</div>
        <div className="p-20">appel api classement</div>
        <div>{/* second quote img */}</div>
      </div>
    </div>
  );
};

export default RbThumbs;
