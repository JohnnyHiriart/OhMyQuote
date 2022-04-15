import React from "react";

export const Card = ({ image, title, quote, signature }) => {
  return (
    <div className="rounded-lg px-6 py-6 border-4 border-redquote w-1/4 bg-redquote bg-opacity-5">
      <img className="w-full rounded-md mb-4" src={image} alt="crew image" />
      <h2 className="font-bold underline mb-4">{title}</h2>
      <p className="font-light">{quote}</p>
      <p className="font-bold">{signature}</p>
    </div>
  );
};

export default Card;
