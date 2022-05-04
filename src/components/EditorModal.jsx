import React from "react";
import PropTypes from "prop-types";
import ModalEditor from "./ModalEditor";
import RedButton from "./RedButton";

const EditorModal = ({ quote, isOpen, openModal, closeModal, image }) => {
  return (
    <div>
      <RedButton text="CUSTOMIZE" onClick={openModal} />
      {isOpen && (
        <ModalEditor closedModal={closeModal} quote={quote} image={image} />
      )}
    </div>
  );
};

EditorModal.propTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,

  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EditorModal;
