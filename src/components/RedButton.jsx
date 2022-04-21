import React from "react";
import PropTypes from "prop-types";

const RedButton = ({ text }) => {
  return (
    <button
      type="button"
      className="px-4 py-4 mt-2 mb-4 font-bold text-center text-white border-4 border-white rounded-lg shadow-md w-60 bg-redquote hover:text-redquote hover:border-redquote hover:bg-white"
    >
      {text}
    </button>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RedButton;
