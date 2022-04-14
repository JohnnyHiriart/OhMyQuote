import React from "react";
import CategoryBlackBlock from "./CategoryBlackBlock";
import CategoryRedBlock from "./CategoryRedBlock";

const Category = () => {
  return (<div>
    <ul className=" w-10/12 h-4/5 grid xl:grid-cols-5 font-bold xl:grid-rows-3 ml-40 mr-20 justify-center align-center gap-1 sm:grid-cols-3 sm:grid-rows-5">
        <CategoryBlackBlock name={"ART"} subCategories={["Category 1", "Category 2", "Category 3"]} />
        <CategoryRedBlock name={"HISTORY"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"BOOKS"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryRedBlock name={"LIFE"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"LOVE"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryRedBlock name={"POP CULTURE"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"DEATH"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryRedBlock name={"FUN STUFF"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"MOVIES"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryRedBlock name={"ANIMALS"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"SCIENCE"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryRedBlock name={"GAMES"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"TV"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryRedBlock name={"POLITICS"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
        <CategoryBlackBlock name={"FAMILY"} subCategories={["Category 1", "Category 2", "Category 3"]}/>
    </ul>
  </div>)
};

export default Category;
