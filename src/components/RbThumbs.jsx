import React from "react";

const RbThumbs = () => {
  return (
    <div className="flex pt-10">
      <div className="flex rounded-3xl w-4 h-4 bg-redquote text-white">1</div>
      <div className="flex justify-center rounded-xl m-2 border-redquote border-2 bg-slate-400">
        {/* box with quote */}
        <div>{/* first quote img */}</div>
        <div className="p-4">hello</div>
        <div>{/* second quote img */}</div>
      </div>
    </div>
  );
};

export default RbThumbs;
