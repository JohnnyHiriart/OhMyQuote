import React from "react";
import PropTypes from "prop-types";
import ModalEditor from "./ModalEditor";
import RedButton from "./RedButton";

const EditorModal = ({ quote, isOpen, openModal, closeModal, image }) => {
  return (
    <div className="p-0 m-0">
      <RedButton text="CUSTOMIZE" onClick={openModal} />
      {isOpen && (
        <ModalEditor closedModal={closeModal} quote={quote} image={image} />
      )}
    </div>
  );
};

EditorModal.propTypes = {
  quote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
  image: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EditorModal;
