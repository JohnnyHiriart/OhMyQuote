import React from "react";
import { useEffect } from "react";

const CategoryRedBlock = ({name}) => {
     return(
        <div className="grid rounded-2xl bg-red-600 hover:scale-150 hover:border-black hover:border-2 hover: text-center text-black p-20">
            {name}
        </div>
    )
}

export default CategoryRedBlock;