import React from "react";
import PropTypes from "prop-types";

const WhiteButton = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="md:h-[50px] flex justify-center items-center xs:p-[2vw] xs:my-[4vw] md:my-[0vw] xs:text-[2.8vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1.2vw] font-bold text-center bg-white border-4 rounded-lg shadow-md xs:w-[40vw] md:w-[15vw] border-redquote hover:border-white text-redquote hover:text-white hover:bg-redquote"
    >
      {text}
    </button>
  );
};

WhiteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteButton;
