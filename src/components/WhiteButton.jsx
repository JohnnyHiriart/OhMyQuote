import React from "react";
import PropTypes from "prop-types";

const WhiteButton = ({ text }) => {
  return (
    <button
      type="button"
      className="w-40 px-4 py-3 mt-2 font-bold text-center bg-white border-4 rounded-lg shadow-md border-redquote hover:border-white text-redquote hover:text-white hover:bg-redquote"
    >
      {text}
    </button>
  );
};

WhiteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteButton;
