import React, { useState } from "react";
import PropTypes from "prop-types";
import CategoryText from "./CategoryText";

const CategoryBlock = ({
  name,
  subCategories,
  borderColor,
  bgColor,
  textColor,
}) => {
  const [content, setContent] = useState(`${name}`);
  console.log(content.length);

  return (
    <div
      onMouseOver={() => setContent(subCategories)}
      onMouseLeave={() => setContent(name)}
      // CHECKER ON FOCUS
      onFocus={() => setContent(name)}
      className={`rounded-2xl hover:scale-125 hover:border-${borderColor} hover:border-2 bg-${bgColor} text-center text-${textColor} p-20`}
    >
      {content.length === 0 ? (
        <CategoryText content={content} />
      ) : (
        <div className="flex content-center justify-center leading-10 text-center hover:cursor-pointer">
          {content}
        </div>
      )}
    </div>
  );
};

CategoryBlock.propTypes = {
  name: PropTypes.string.isRequired,
  subCategories: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default CategoryBlock;
