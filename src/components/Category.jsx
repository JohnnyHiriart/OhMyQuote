import React from "react";
import CategoryBlackBlock from "./CategoryBlackBlock";
import CategoryRedBlock from "./CategoryRedBlock";
import NavBar from "./NavBar";

const Category = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex fixed left-28 p-10 justify-center content-center">
        <ul className=" grid lg:grid-cols-5 font-bold lg:grid-rows-3 font-barlow justify-center align-center gap-1 sm:grid-cols-3 sm:grid-rows-5">
          <CategoryBlackBlock
            name={["ART"]}
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name={["HISTORY"]}
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="BOOKS"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name="LIFE"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="LOVE"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name="POP CULTURE"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="DEATH"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name="FUN STUFF"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="MOVIES"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name="ANIMALS"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="SCIENCE"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name="GAMES"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="TV"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryRedBlock
            name="POLITICS"
            subCategories={["Category ", "Category ", "Category "]}
          />
          <CategoryBlackBlock
            name="FAMILY"
            subCategories={["Category ", "Category ", "Category "]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Category;
