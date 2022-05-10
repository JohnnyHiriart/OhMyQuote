import React from "react";
import PropTypes from "prop-types";

const WhiteButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="p-[2vw] xs:my-[6vw] sm:my-[2vw] md:my-[0vw] text-[1vw] font-bold text-center bg-white border-4 rounded-lg shadow-md xs:w-[40vw] md:w-[15vw] border-redquote hover:border-white text-redquote hover:text-white hover:bg-redquote"
    >
      {text}
    </button>
  );
};

WhiteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteButton;
