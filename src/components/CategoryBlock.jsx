import React, { useState } from "react";
import PropTypes from "prop-types";


const CategoryBlock = ({
  name,
  subCategories,
  isBlack=false
}) => {
  const [content, setContent] = useState(name);
  return (
    isBlack
    ? <div
        onMouseOver={() => setContent(subCategories)}
        onMouseLeave={() => setContent(name)}
        onMouseFocus={() => setContent(subCategories)}

        className={`flex items-center justify-center rounded-2xl hover:scale-125 hover:border-black hover:border-2 bg-redquote text-black w-[15vw] h-[30vh]`}>
        <div className="">
        {content === name 
        ? content.map((word)=> <div className="hover:cursor-pointer">{word}</div>)
        : content.map((word)=> <a className="flex justify-center leading-10 hover:cursor-pointer" href={word.linkSubCat}>{word.nameSubCat}</a>)}
        </div>
      </div>
    :<div
        onMouseOver={() => setContent(subCategories)}
        onMouseLeave={() => setContent(name)}
        onMouseFocus={() => setContent(subCategories)}

        className={`flex items-center justify-center rounded-2xl hover:scale-125 hover:border-redquote hover:border-2 bg-black text-white w-[15vw] h-[30vh]`}>
        <div className="">
        {content === name 
        ? content.map((word)=> <div className="hover:cursor-pointer">{word}</div>)
        : content.map((word)=> <a className="flex justify-center leading-10 hover:cursor-pointer" href={word.linkSubCat}>{word.nameSubCat}</a>)}
        </div>
      </div>
  );
};

CategoryBlock.propTypes = {
  name: PropTypes.string.isRequired,
  subCategories: PropTypes.string.isRequired,
  isBlack: PropTypes.bool.isRequired,
};

export default CategoryBlock;
