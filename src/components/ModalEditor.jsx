/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import QuoteEditor from "./QuoteEditor";

const ModalEditor = ({ closedModal, quote }) => {
  return (
    <div className="flex z-[20] fixed top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] w-[60vw] h-[80vh] p-3 border-4 rounded-lg shadow-md border-redquote bg-white">
      <div
        className="flex content-end justify-end hover:cursor-pointer"
        onClick={closedModal}
      >
        <span>&times;</span>
      </div>
      <div className="flex">
        <QuoteEditor quote={quote} />
      </div>
    </div>
  );
};

ModalEditor.propTypes = {
  closedModal: PropTypes.bool.isRequired,
};

export default ModalEditor;
