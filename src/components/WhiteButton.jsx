import React from "react";
import PropTypes from "prop-types";

const WhiteButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="px-4 py-4 mt-2 font-bold text-center bg-white border-4 rounded-lg shadow-md w-60 border-redquote hover:border-white text-redquote hover:text-white hover:bg-redquote"
    >
      {text}
    </button>
  );
};

WhiteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteButton;
