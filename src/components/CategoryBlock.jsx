import React, { useState } from "react";
import CategoryText from "./CategoryText";

const CategoryBlock = ({ name, subCategories, borderColor, bgColor, textColor}) => {
  const [content, setContent] = useState(`${name}`);
  console.log(content.length)

  return (
    <div
      onMouseOver={() => setContent(subCategories)}
      onMouseLeave={() => setContent(name)}
      className={`rounded-2xl hover:scale-125 hover:border-${borderColor} hover:border-2 bg-${bgColor} text-center text-${textColor} p-20`}>
      {(content.length===0) ? <CategoryText content={content} />
      :<div className="flex justify-center leading-10 hover:cursor-pointer content-center text-center">
      {content}
    </div>}
    </div>
  );
};

export default CategoryBlock;
