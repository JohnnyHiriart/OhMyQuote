import React from "react";
import CategoryBlackBlock from "./CategoryBlackBlock";
import CategoryRedBlock from "./CategoryRedBlock";

const Category = () => {
  return (<div>
    <ul className=" w-10/12 h-4/5 grid xl:grid-cols-5 font-bold xl:grid-rows-3 ml-40 mr-20 justify-center align-center gap-1 sm:grid-cols-3 sm:grid-rows-5">
        <CategoryBlackBlock name={"ART"}/>
        <CategoryRedBlock name={"HISTORY"}/>
        <CategoryBlackBlock name={"BOOKS"}/>
        <CategoryRedBlock name={"LIFE"}/>
        <CategoryBlackBlock name={"LOVE"}/>
        <CategoryRedBlock name={"POP CULTURE"}/>
        <CategoryBlackBlock name={"DEATH"}/>
        <CategoryRedBlock name={"FUN STUFF"}/>
        <CategoryBlackBlock name={"MOVIES"}/>
        <CategoryRedBlock name={"ANIMALS"}/>
        <CategoryBlackBlock name={"SCIENCE"}/>
        <CategoryRedBlock name={"GAMES"}/>
        <CategoryBlackBlock name={"TV"}/>
        <CategoryRedBlock name={"POLITICS"}/>
        <CategoryBlackBlock name={"FAMILY"}/>
    </ul>
  </div>)
};

export default Category;
