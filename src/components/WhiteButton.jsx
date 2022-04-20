import React from "react";

const WhiteButton = ({ text }) => {
  return (
    <button className="w-40 px-4 py-3 mt-2 font-bold text-center bg-white border-4 rounded-lg shadow-md border-redquote hover:border-white text-redquote hover:text-white hover:bg-redquote">
      {text}
    </button>
  );
};

export default WhiteButton;
