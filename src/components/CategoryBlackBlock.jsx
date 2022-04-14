import React from "react";
import { useState } from "react";

const CategoryBlackBlock = ({name, subCategories}) => {
    const [content, setContent] = useState(`${name}`);
    
    return(
        <div onMouseOver={()=>setContent(subCategories)} onMouseLeave={()=>setContent(name)} className="grid rounded-2xl hover:scale-150 hover:text-sm hover:border-red-600 hover:border-2 bg-black text-center text-white p-20">
            {content}
        </div>
    )
}

export default CategoryBlackBlock;