import React from "react";

const RbThumbs = () => {
  return (
    <div className="flex content-center justify-center pt-10">
      <div className="flex content-center justify-center w-5 h-5 pt-6 rounded-3xl bg-redquote">
        1
      </div>
      <div className="flex content-center justify-center w-3/4 m-2 border-2 rounded-xl border-redquote bg-slate-400">
        {/* box with quote */}
        <div>{/* first quote img */}</div>
        <div className="p-20">appel api classement</div>
        <div>{/* second quote img */}</div>
      </div>
    </div>
  );
};

export default RbThumbs;
