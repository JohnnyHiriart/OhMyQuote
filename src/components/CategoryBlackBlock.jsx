import React, { useState } from "react";

const CategoryBlackBlock = ({ name, subCategories }) => {
  const [content, setContent] = useState(`${name}`);
  return (
    <div
      onMouseOver={() => setContent(subCategories)}
      onMouseLeave={() => setContent(name)}
      className="rounded-2xl hover:scale-125 hover:border-red-600 hover:border-2 bg-black text-center text-white p-20"
    >
      <div className="flex justify-center leading-10 hover:cursor-pointer content-center text-center">
        {content}
      </div>
    </div>
  );
};

export default CategoryBlackBlock;
