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
    <div className="hover:cursor-pointer xs:w-[10vw] md:w-[6vw] md:pb-[8vw] lg:pb-[0vw]">
      <img src={imgUrl} alt="thumb" onClick={openModal} />
      {isOpen && <ModalRating closedModal={closedModal} />}
    </div>
  );
};

RatingModal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  isDown: PropTypes.bool.isRequired,
  actualQuote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
  topQuotes: PropTypes.arrayOf(
    PropTypes.shape({
      quoteText: PropTypes.string,
      quoteAuthor: PropTypes.string,
    })
  ).isRequired,
};

export default RatingModal;
