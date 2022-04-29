import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

const RedButtonModal = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closedModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="px-4 py-4 mt-2 mb-4 font-bold text-center text-white border-4 border-white rounded-lg shadow-md w-60 bg-redquote hover:text-redquote hover:border-redquote hover:bg-white"
        onClick={openModal}
      >
        {text}
      </button>
      {isOpen && <Modal closedModal={closedModal} />}
    </div>
  );
};

RedButtonModal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RedButtonModal;
