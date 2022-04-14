import React from "react";

const CategoryBlackBlock = ({name}) => {
    return(
        <div className="grid rounded-2xl hover:scale-150 hover:border-red-600 hover:border-2 bg-black text-center text-white p-20">
            {name}
        </div>
    )
}

export default CategoryBlackBlock;