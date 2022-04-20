import React from "react";
import CategoryBlock from "./CategoryBlock";
import NavBar from "./NavBar";


const Category=()=>{
  return(
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex fixed left-28 h-screen p-10 justify-center content-center">
        <ul className=" grid lg:grid-cols-5 font-bold lg:grid-rows-3 font-barlow justify-center align-center gap-1 sm:grid-cols-3 sm:grid-rows-5">
          <CategoryBlock
            name={["ART"]}
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name={["HISTORY"]}
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="BOOKS"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name="LIFE"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="LOVE"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name="POP CULTURE"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="DEATH"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name="FUN STUFF"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="MOVIES"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name="ANIMALS"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="SCIENCE"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name="GAMES"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="TV"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
          <CategoryBlock
            name="POLITICS"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"black"}
            bgColor={"redquote"}
            textColor={"black"}
          />
          <CategoryBlock
            name="FAMILY"
            subCategories={"Category ", "Category ", "Category "}
            borderColor={"redquote"}
            bgColor={"black"}
            textColor={"white"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Category;
