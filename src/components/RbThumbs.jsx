import React from "react";

const RbThumbs = () => {
  return (
    <div className="flex pt-10 justify-center content-center">
      <div className="flex rounded-3xl w-5 h-5 bg-redquote content-center justify-center pt-6 text-white">1</div>
      <div className="flex justify-center w-3/4 rounded-xl m-2 content-center border-redquote border-2 bg-slate-400">
        {/* box with quote */}
        <div>{/* first quote img */}</div>
        <div className="p-4">hello</div>
        <div>{/* second quote img */}</div>
      </div>
    </div>
  );
};

export default RbThumbs;
