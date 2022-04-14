import React from "react";
import { useState } from "react";

const CategoryRedBlock = ({name, subCategories}) => {
    const [content, setContent] = useState(`${name}`);
     return(
        <div onMouseOver={()=>setContent(subCategories)} onMouseLeave={()=>setContent(name)} className="grid rounded-2xl bg-red-600 hover:scale-150 hover:border-black hover:border-2 hover: text-center text-black p-20">
            {content}
        </div>
    )
}

export default CategoryRedBlock;