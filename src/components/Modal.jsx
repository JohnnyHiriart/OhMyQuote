/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import WhiteButton from "./WhiteButton";

const Modal = ({ closedModal }) => {
  return (
    <div className="z-[20] fixed top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] w-3/5 h-4/5 p-3 border-4 rounded-lg shadow-md border-redquote bg-white">
      <button type="button" className="close" onClick={closedModal}>
        <span>&times;</span>
      </button>
      <form
        method="POST"
        action="https://getform.io/f/b11513ef-5f95-4a2f-bcc7-f3d8241c0861"
      >
        <div className="flex flex-col flex-wrap items-center w-full h-full ">
          <div className="flex flex-row content-center justify-center">
            <h1 className="text-6xl font-bold text-redquote">FEEDBACK</h1>
          </div>
          <p className="p-2 leading-5">
            Sharing is caring! Please let us know <br /> how much you love (or
            hate) us. Both is good too.
          </p>
          <div className="mt-2">
            <textarea
              type="text"
              name="message"
              className="p-1 ml-1 min-h-[30vh] min-w-[22rem] mb-2 border-4 border-redquote bg-redquote bg-opacity-5 focus:outline-none"
              placeholder="Your feedback"
            />
          </div>
          <input
            type="email"
            className="p-1 mt-2 mb-2 ml-1 border-4 w-[22rem] border-redquote focus:outline-none"
            placeholder="Your Email"
          />
          <button type="submit">
            <WhiteButton text="SUBMIT" />
          </button>
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  closedModal: PropTypes.bool.isRequired,
};

export default Modal;
