import React from "react";
import PropTypes from "prop-types";

const RedButton = ({ text }) => {
  return (
    <button
      type="button"
      className="w-40 px-4 py-3 mt-2 mb-4 font-bold text-center text-white border-4 border-white rounded-lg shadow-md bg-redquote hover:text-redquote hover:border-redquote hover:bg-white"
    >
      {text}
    </button>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RedButton;
