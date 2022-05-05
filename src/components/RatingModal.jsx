import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalRating from "./ModalRating";

const RatingModal = ({
  imgUrl,
  refreshQuotesUp,
  refreshQuotesDown,
  actualQuote,
  topQuotes,
  isDown,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closedModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    isDown
      ? refreshQuotesDown(topQuotes, actualQuote)
      : refreshQuotesUp(topQuotes, actualQuote);
    setIsOpen(true);
    setTimeout(() => closedModal(), 3000);
  };

  return (
    <div className="hover:cursor-pointer w-[10vw]">
      <img src={imgUrl} alt="thumb" onClick={openModal} />
      {isOpen && <ModalRating closedModal={closedModal} />}
    </div>
  );
};

RatingModal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  isDown: PropTypes.bool.isRequired,
  refreshQuotesUp: PropTypes.func.isRequired,
  refreshQuotesDown: PropTypes.func.isRequired,
  actualQuote: PropTypes.string.isRequired,
  topQuotes: PropTypes.string.isRequired,
};

export default RatingModal;
