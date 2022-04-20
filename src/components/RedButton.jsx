import React from "react";

const RedButton = ({ text }) => {
    return (
<button className = "bg-redquote rounded-lg px-4 py-3 mt-2 border-4 shadow-md border-white text-white mb-4 font-bold text-center hover:text-redquote  hover:border-redquote hover:bg-white w-40">
    {text}
  </button>
  );
  };

export default RedButton;