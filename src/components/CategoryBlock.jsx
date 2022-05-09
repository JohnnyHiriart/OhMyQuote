import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryBlock = ({ name, subCategories, setGenre, isBlack = false }) => {
  const [content, setContent] = useState(name);
  return isBlack ? (
    <div
      onMouseOver={() => setContent(subCategories)}
      onMouseLeave={() => setContent(name)}
      onFocus={() => setContent(subCategories)}
      className="flex items-center justify-center rounded-2xl hover:scale-125 hover:border-black hover:border-2 bg-redquote text-black hover:text-white xl:w-[15vw] xl:h-[29vh] sm:w-[25vw] sm:h-[18vh] xs:w-[55vw] xs:h-[20vh]"
    >
      <div>
        {content === name
          ? content.map((word) => (
              <div className="hover:cursor-pointer">{word}</div>
            ))
          : content.map((word) => (
              <Link to="/quote-me">
                <div
                  className="flex justify-center leading-10 hover:cursor-pointer hover:text-black"
                  onClick={() => setGenre(word)}
                >
                  {word}
                </div>
              </Link>
            ))}
      </div>
    </div>
  ) : (
    <div
      onMouseOver={() => setContent(subCategories)}
      onMouseLeave={() => setContent(name)}
      onFocus={() => setContent(subCategories)}
      className="flex items-center justify-center rounded-2xl hover:scale-125 hover:border-redquote hover:border-2 bg-black text-white hover:text-white xl:w-[15vw] xl:h-[29vh] sm:w-[25vw] sm:h-[18vh] xs:w-[55vw] xs:h-[20vh]"
    >
      <div>
        {content === name
          ? content.map((word) => (
              <div className="hover:cursor-pointer">{word}</div>
            ))
          : content.map((word) => (
              <Link to="/quote-me">
                <div
                  className="flex justify-center leading-10 hover:cursor-pointer hover:text-redquote"
                  onClick={() => setGenre(word)}
                >
                  {word}
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

CategoryBlock.propTypes = {
  name: PropTypes.string.isRequired,
  subCategories: PropTypes.string.isRequired,
  isBlack: PropTypes.bool.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default CategoryBlock;
