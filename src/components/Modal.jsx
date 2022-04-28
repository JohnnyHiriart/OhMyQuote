/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import WhiteButton from "./WhiteButton";

const Modal = ({ closedModal }) => {
  return (
    <div className="z-[20] fixed top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] w-3/5 h-3/4 p-5 mt-5 border-4 rounded-lg shadow-md border-redquote bg-white">
      <button type="button" className="close" onClick={closedModal}>
        <span>&times;</span>
      </button>
      <div className="flex flex-col flex-wrap content-center justify-start w-full h-full p-2 m-2">
        <div className="flex flex-row content-center justify-center">
          <h1 className="text-6xl font-bold text-redquote">FEEDBACK</h1>
        </div>
        <p className="p-2 leading-5">
          Sharing is caring! <br /> Please let us know how much you love <br />{" "}
          (or hate) us. Both is good too.
        </p>
        <div className="mt-2">
          <textarea
            className="p-1 ml-1 min-h-[22rem] min-w-[22rem] mb-2 border-4 border-redquote bg-redquote bg-opacity-5 focus:outline-none"
            placeholder="Your feedback"
          />
        </div>
        <input
          type="text"
          className="p-1 mt-2 mb-2 ml-1 border-4 w-[22rem] border-redquote focus:outline-none"
          placeholder="Your Email"
        />
        <button type="button">
          <WhiteButton text="SUBMIT" />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closedModal: PropTypes.bool.isRequired,
};

export default Modal;
