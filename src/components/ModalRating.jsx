/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const ModalRating = ({ closedModal }) => {
  return (
    <div className="flex z-20 flex-col fixed top-[12%] left-[82%] translate-x-[-50%] translate-y-[-50%] w-[30vw] h-[10vw] p-3 border-4 rounded-lg shadow-md border-redquote bg-white">
      <div className="w-full h-1 bg-gray-300">
        <div style={{ width: `45%` }} className="h-full bg-redquote" />
      </div>
      <button
        type="button"
        className="flex hover:font-extrabold hover:text-redquote"
        onClick={closedModal}
      >
        <span>&times;</span>
      </button>

      <div className="flex text-center p-[1vw] text-[1.2vw]">
        Thank you for your rate, we will take into account for the TopQuote
        section soon !
      </div>
    </div>
  );
};

ModalRating.propTypes = {
  closedModal: PropTypes.bool.isRequired,
};

export default ModalRating;
