import React, { useState } from "react";

const CategoryRedBlock = ({ name, subCategories }) => {
  const [content, setContents] = useState(`${name}`);
  return (
    <div
      onMouseOver={() => setContents(subCategories)}
      onMouseLeave={() => setContents(name)}
      className="rounded-2xl bg-red-600 hover:scale-125 underline-offset-1 hover:border-black hover:border-2 text-center text-black p-20"
    >
      <div className="flex justify-center leading-10 hover:cursor-pointer content-center text-center">
        {content}
      </div>
    </div>
  );
};

export default CategoryRedBlock;
