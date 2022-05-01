import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalEditor from "./ModalEditor";
import RedButton from "./RedButton";

const EditorModal = ({ quote, isOpen, openModal, closeModal }) => {
  return (
    <div>
      <RedButton text="CUSTOMIZE" onClick={openModal} />
      {isOpen && <ModalEditor closedModal={closeModal} quote={quote} />}
    </div>
  );
};

EditorModal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EditorModal;
