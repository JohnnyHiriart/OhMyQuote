import React from "react";

const WhiteButton = ({ text }) => {
    return (
<button className = "bg-white rounded-lg px-4 py-3 mt-2 border-4 shadow-md border-redquote hover:border-white font-bold text-redquote text-center  hover:text-white hover:bg-redquote w-40">
    {text}
  </button
  );
};

export default WhiteButton;
