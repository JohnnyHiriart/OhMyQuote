import React from "react";
import PropTypes from "prop-types";

const Card = ({ image, title, quote, signature }) => {
  return (
    <div className="w-1/4 px-6 py-6 border-4 rounded-lg border-redquote bg-redquote bg-opacity-5 text-[1vw]">
      <img className="w-full mb-4 rounded-md" src={image} alt="crew_image" />
      <h2 className="mb-4 font-bold underline">{title}</h2>
      <p className="font-light">{quote}</p>
      <p className="font-bold">{signature}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
};

export default Card;
