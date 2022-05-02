import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalRating from "./ModalRating";

const RatingModal = ({ imgUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => closedModal(), 5000);
  };

  const closedModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="hover:cursor-pointer w-[10vw]">
      <img src={imgUrl} alt="thumb" onClick={openModal} />
      {isOpen && <ModalRating closedModal={closedModal} />}
    </div>
  );
};

RatingModal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default RatingModal;
