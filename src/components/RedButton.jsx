import React from "react";

const RedButton = ({ text }) => {
  return (
    <button
      type="button"
      className="w-40 px-4 py-3 mt-2 mb-4 font-bold text-center text-white border-4 border-white rounded-lg shadow-md bg-redquote hover:text-redquote hover:bg-white"
    >
      {text}
    </button>
  );
};

export default RedButton;
