import React from "react";
import PropTypes from "prop-types";

const RedButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="md:p-[1vw] xs:p-[2vw] m-[0.5vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1.9vw] lg:text-[1.5vw] xl:text-[1.3vw] font-bold text-center text-white border-4 border-white rounded-lg shadow-md xs:w-[40vw] md:w-[15vw] bg-redquote hover:text-redquote hover:border-redquote hover:bg-white"
    >
      {text}
    </button>
  );
};

RedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RedButton;
